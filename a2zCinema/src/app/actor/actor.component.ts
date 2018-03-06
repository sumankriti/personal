import { UserDetailModel } from './../model/userdetail.model';
import { UserService } from './../services/uservice.service';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent  {
private userDetails;
public event;
public save;
userName;
userSub;
@ViewChild('fileInput') fileInput: ElementRef;
@ViewChild('galleryInput') galleryInput:ElementRef;
a2zCinema = 'http://192.168.1.2:8090';
constructor(private http:Http,private router:Router,private userService:UserService)
{
  
  const user=JSON.parse(localStorage.getItem('userData'));
this.userDetails=user.userId;
this.userName=user.name;
console.log(this.userName);
}
profession=[{id:1,name:'Actor'},{id:2,name:'Actress'},{id:3,name:'Model'},{id:4,name:'Suppoting Actor'},
{id:5,name:'Supporting Actress'},{id:6,name:'Junior Artist'},{id:7,name:'Child Actor'},{id:8,name:'Child Actress'}
]
genders=[{id:1,name:'Male'},{id:2,name:'Female'},{id:3,name:'Other'}];
height=[{id:1,name:'5 Feet 2 Inches'},{id:2,name:'5 Feet 3 Inches'},{id:3,name:'5 Feet 5 Inches'}];
contactMethods=[{id:1,name:'course1'},{id:2,name:'course2'},{id:3,name:'course3'}];
country=[{id:1,name:'India'},{id:2,name:'USA'},{id:3,name:'Germany'}];
state=[{id:1,name:'Karnataka'},{id:2,name:'Bihar'},{id:3,name:'UP'},{id:4,name:'Tamilnadu'}];
city=[{id:1,name:'Bangalore'},{id:2,name:'Patna'},{id:3,name:'Gaya'},{id:4,name:'Chennai'}];
interestedIndustry=[{id:1,name:'Bollwood'},{id:2,name:'Hollywood'},{id:3,name:'Tollywood'}];
public checks= [
  {description: 'English', value: 'English'},
  {description: "Kannada", value: 'Kannada'},
  {description: "Telgu", value: 'Telgu'},
  {description:"Tamil",value:'Tamil'},
  {description:"Hindi",value:'Hindi'}
];
privacy=[{id:1,name:'Public'},{id:2,name:'Private'}]
form=new FormGroup({
  profession:new FormControl('',Validators.required),
  otherProfession:new FormControl('',Validators.required),
  gender:new FormControl('',Validators.required),
  dob:new FormControl('',Validators.required),
  age:new FormControl('',Validators.required),
  heigth:new FormControl('',Validators.required),
  weight:new FormControl('',Validators.required),
  mobile:new FormControl('',Validators.required),
  wmobile:new FormControl('',Validators.required),
  qualification:new FormControl('',Validators.required),
  course:new FormControl('',Validators.required),
  otherlanguage:new FormControl('',Validators.required),
  yself:new FormControl('',Validators.required),
  language:new FormControl('',Validators.required),
  address:new FormControl('',Validators.required),
  country:new FormControl('',Validators.required),
  state:new FormControl('',Validators.required),
  city:new FormControl('',Validators.required),
  zip:new FormControl('',Validators.required),
  industry:new FormControl('',Validators.required),
  avatar:new FormControl('',Validators.required),
  galleryInput:new FormControl('',Validators.required),
  url:new FormControl('',Validators.required),
  privacy:new FormControl('',Validators.required)
})
onFileChange(event) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get('avatar').setValue({
        filename: file.name,
        filetype: file.type,
        // value: reader.result.split(',')[1]
      })
    };
  }
}
onGalleryChange(event)
{
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get('galleryInput').setValue({
        filename: file.name,
        filetype: file.type,
        // value: reader.result.split(',')[1]
      })
    };
  }
}
onCheckChange(event)
{
  if(this.form.value.language==true)
  {
    this.event=event.target.value;
    console.log(this.event);
  }
}
private userForm=new UserDetailModel();
onSubmit()
{
  console.log(this.form.value);
  this.userForm.subProfession=this.form.value.profession;
  this.userForm.otherProfession=this.form.value.otherProfession;
  this.userForm.gender=this.form.value.gender;
  this.userForm.age=this.form.value.age;
  this.userForm.height=this.form.value.heigth;
  this.userForm.weight=this.form.value.weight;
  this.userForm.whatsapp=this.form.value.wmobile;
  this.userForm.qualification=this.form.value.qualification;
  this.userForm.filmCourse=this.form.value.course;
  this.userForm.language=this.event;
  this.userForm.otherLanguage=this.form.value.otherlanguage;
  this.userForm.aboutSelf=this.form.value.yself;
  this.userForm.address=this.form.value.address;
  this.userForm.country=this.form.value.country;
  this.userForm.state=this.form.value.state;
  this.userForm.city=this.form.value.city;
  this.userForm.zip=this.form.value.zip;
  this.userForm.industry=this.form.value.industry;
  this.userForm.privacy=this.form.value.privacy;
  
  return this.http.post(`${this.a2zCinema}/updateActorProfile/${this.userDetails}`,this.userForm)
  .subscribe(res=>{
  this.userSub=res.json();
 localStorage.setItem('userCopy',JSON.stringify(this.userSub));
 console.log(localStorage.getItem('userCopy'));
  });
}


}
