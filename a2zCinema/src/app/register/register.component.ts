
import { UserService } from './../services/uservice.service';
import { Http } from '@angular/http';
import { RegisterModel } from './../model/register.model';


import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

private register=new RegisterModel();
constructor(private http:Http,private service:UserService)
{
  
}
  form=new FormGroup({
    profession:new FormControl('',Validators.required),
    name:new FormControl('',[Validators.required,Validators.minLength(3),
      ]),
      email:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required) ,
      rePassword:new FormControl('',Validators.required)
     
})
get username()
{
  return this.form.get('username');
}
onSubmit()
{
  console.log(this.form.value);
  this.register.profession=this.form.value.profession;
  this.register.name=this.form.value.name;
  this.register.email=this.form.value.email;
  this.register.mobile=this.form.value.mobile;
  this.register.password=this.form.value.password;
  this.register.is_rest_password=this.form.value.rePassword;
  console.log(this.register);
  // return this.http.post('http://192.168.1.2:8090/addUser',this.register).subscribe(res=>{
  //   console.log(res.json());
  // });
  this.service.registerUser(this.register).subscribe(response=>{
    console.log(response.json());
  })

}
}
