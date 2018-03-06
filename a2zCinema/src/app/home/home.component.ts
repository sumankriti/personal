import { RegisterModel } from './../model/register.model';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserService } from './../services/uservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserService]
})
export class HomeComponent {
  current_user_name:string;
  username:string;
 public userDetails;
 public isUser=true;
 public isLogin=false;
dataId;
  constructor(private router:Router,private userservice:UserService) {
    const user=JSON.parse(localStorage.getItem('userData'));
    this.userDetails=user;
    console.log("username is coming--------"+this.userDetails.name);
    this.router;
   }
   profession=[{id:1,name:'Actor/Actress/Model'},{id:2,name:'Director'},{id:3,name:'Agency'}];
   gotoResponse(){
    this.current_user_name=this.username;
    this.userservice.getUser(this.current_user_name).subscribe(data => this.checkUsers(data),err=>alert('Login Failed'));
    console.log(this.current_user_name);
     
     }
     
     checkUsers(data){
     this.dataId=data.user_id;
     console.log(this.dataId);
       localStorage.setItem('userData',JSON.stringify(data));
     console.log('userdate is coming'+localStorage.getItem('userData'));
       if(data.name=this.current_user_name && data.role=='actor'||data.role=='backstage'){
         this.isUser=false;
         this.isLogin=true;
        this.router.navigateByUrl('/')
       }
       else if(data.name=this.current_user_name && data.role=='admin')
       {
         this.isUser=false;
         this.isLogin=true;
         this.router.navigateByUrl('/')
       }
        else{
          this.isUser=true;
          this.isLogin=false;
        alert('error');
       }
     }
     form=new FormGroup({
      profession:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      rePassword:new FormControl('',Validators.required)
     });
     RegisterModel =new RegisterModel();
     onSubmit()
     {
       console.log(this.form.value);
       this.RegisterModel.profession=this.form.value.profession;
       this.RegisterModel.name=this.form.value.name;
       this.RegisterModel.email=this.form.value.email;
       this.RegisterModel.mobile=this.form.value.mobile;
       this.RegisterModel.password=this.form.value.password;
       this.RegisterModel.is_rest_password=this.form.value.rePassword;
     this.userservice.addUser(this.RegisterModel).subscribe(res=>{
       console.log(res.json());
     })
     }
    
     updateProfile()
     {
       this.isUser=false;
       this.isLogin=true;
      
     }
     profileClick()
     {
      
       this.isUser=false;
     }
}
