import { Router } from '@angular/router';
import { PasswordModel } from './../model/changePassword.model';
import { UserService } from './../services/userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
private userData;
isPassword:string;
checkPassword:string;
  constructor(private ts: ToastrService,private service:UserService,private router:Router) { }

  ngOnInit() {
   this.userData=JSON.parse(localStorage.getItem('userData'));
  }
  form=new FormGroup({
    oldpassword:new FormControl('',Validators.required),
    newpassword:new FormControl('',Validators.required),
    confirmpassword:new FormControl('',Validators.required)
  })
  onSubmit(){
  if(this.form.value.oldpassword!=this.userData.password)
  {
    this.isPassword="password doesn't match";
   this.ts.error('please enter correct password');
  }
  else{
   this.changePasswordService();

  }
  }
   changePassword=new PasswordModel();
  changePasswordService()
  {
    this.changePassword.user_id=this.userData.user_id;
    this.changePassword.password=this.form.value.newpassword;
    this.changePassword.is_rest_password=this.form.value.confirmpassword;
    console.log(this.changePassword);
    this.service.changePassword(this.changePassword).subscribe(res=>{
      this.ts.success('','password has been changed successfully');
    });
    this.form.reset();
    
  }
  onCancel()
  {
    this.router.navigateByUrl('/');
  }

}
