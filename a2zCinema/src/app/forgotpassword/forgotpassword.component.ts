import { UserService } from './../services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit() {
  }

   form=new FormGroup({
     email:new FormControl('',[Validators.email,Validators.required])
   })
   get email()
   {
     return this.form.get('email');
   }
  onSubmit()
  {
   this.service.getEmail(this.form.value.email).subscribe(res=>{
     console.log(res);
   })
   alert('Your Password has been Sent Successfully. Please Check Your Email & Login it.')
   this.form.reset();
  }
}
