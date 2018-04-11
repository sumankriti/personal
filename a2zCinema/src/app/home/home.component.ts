import { UserService } from './../services/userservice.service';
import { RegisterModel } from './../model/register.model';
import { FormGroup, FormControl,Validators } from '@angular/forms';

import { Component, OnInit ,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit{
 @Input('isUser') isUser:boolean;
 @Input('isLogin') isLogin:boolean;
  current_user_name:string;
  public password:string;
  username:string;
 public userId;
 public userName;
 public dataName;
 public userDetail;
 public loginUserName;
 public paramId;
 private _success = new Subject<string>();
staticAlertClosed = false;
  successMessage: string;
  constructor(private router:Router,private userservice:UserService,private ActRouter:ActivatedRoute, 
    private ts: ToastrService) {
   
    
   }
ngOnInit()
{

  if(this.paramId !== undefined){
    this.userservice.getUserById(this.userId).subscribe(data=> this.setUserDetails(data));
    this.userDetail = JSON.parse(localStorage.getItem('userData'));
    this.loginUserName = this.userDetail.name;
  }else{
    console.log(this.paramId);
  } 

  
  if(localStorage.getItem('userData')){
    this.isLogin = true;
    this.isUser =false;
    this.userDetail = JSON.parse(localStorage.getItem('userData'));
    this.loginUserName = this.userDetail.name;
  }else{
    this.isLogin = false;
    this.isUser = true;
  }

  this.ActRouter.paramMap.subscribe(params=>{
    this.paramId=params.get('id');
  });

  setTimeout(() => this.staticAlertClosed = true, 30000);

  this._success.subscribe((message) => this.successMessage = message);
  debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
}

setUserDetails(data){
  localStorage.setItem('userData', JSON.stringify(data));
}

ngOnChanges(){
  this.userDetail = JSON.parse(localStorage.getItem('userData'));
    console.log('>>>>');
    console.log(this.userDetail.name);
    this.loginUserName = this.userDetail.name;

}
   profession=[{id:1,name:'Actor/Actress/Model'},{id:2,name:'Director'},{id:3,name:'Agency'}];
   gotoResponse(){
    this.current_user_name=this.username;
    this.userservice.checkUser(this.current_user_name).subscribe(data => this.checkUsers(data),error => this.error(error));
    console.log(this.current_user_name);
     
     }
     
     error(error)
     {
      this.ts.error('User is unauthorized');
     }
     checkUsers(data){
     
       console.log(data);
       console.log(data.role);
       localStorage.setItem('userData',JSON.stringify(data));
       const user=JSON.parse(localStorage.getItem('userData'));
       this.userDetail = JSON.parse(localStorage.getItem('userData'));
       console.log(this.userDetail.name);
       this.userName = this.userDetail.name;
 
       if(data.name=this.current_user_name && data.password==this.password){
        this.ts.success('Logged In Successfully');
         this.isUser=false;
         this.isLogin=true;
        
       }
        else{
          this.ts.error('User is unauthorized');
          this.isUser=true;
          this.isLogin=false;
      
       }
     }
     private register=new RegisterModel();
       form=new FormGroup({
         profession:new FormControl('',[Validators.required]),
         name:new FormControl('',[Validators.required,Validators.minLength(3),
           ]),
           email:new FormControl('',[Validators.required,Validators.email]),
           mobile:new FormControl('',Validators.required,Validators.pattern[0-9]),
           password:new FormControl('',Validators.required) ,
           rePassword:new FormControl('',Validators.required)
          
     })
     get name()
     {
       return this.form.get('name');
     }
     onSubmit()
     {
      this.form.get('name').markAsTouched();
       this.register.profession=this.form.value.profession;
       this.register.name=this.form.value.name;
       this.register.email=this.form.value.email;
       this.register.mobile=this.form.value.mobile;
       this.register.password=this.form.value.password;
       this.register.is_rest_password=this.form.value.rePassword;
       console.log(this.register);
       this.userservice.registerUser(this.register).subscribe(response=>{
         console.log(response.json());
         alert('A Link has been Sent Your Email. Please Click on Verification Link to Confirm Your Registration.....')
       })
       
       this.form.controls['name'].reset();
       this.form.controls['email'].reset();
       this.form.controls['mobile'].reset();
       this.form.controls['password'].reset();
       this.form.controls['rePassword'].reset();
     }
     
     profileClick()
     {
       this.isUser=false;
       this.isLogin=true;
       this.router.navigate(['/profile'])
     }
     updateProfile()
     {
       this.router.navigate(['/updateuser',this.userDetail.user_id]);
       this.isUser=false;
     }
     changePassword()
     {
       this.router.navigateByUrl('/changepassword');
     }
     onLogout()
     {
       
       //localStorage.clear();
       this.router.navigateByUrl('/');
       window.location.reload();
       localStorage.removeItem('userData');
     }
}
