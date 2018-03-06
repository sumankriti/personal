import { RegisterComponent } from './../register/register.component';
import { RegisterModel } from './../model/register.model';
import { UserService } from './../services/uservice.service';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public event;
  userId;
  userName;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('galleryInput') galleryInput:ElementRef;
  constructor(private router:ActivatedRoute,private userService:UserService){}
  ngOnInit()
  {
    this.router.paramMap.subscribe(params=>{
      this.userId=params.get('id');
      console.log(this.userId);
      this.userService.getUserById(this.userId).subscribe(data=>{
        this.userName=data.name;
            console.log(this.userName);
      })
    })
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
  RegisterModel=new RegisterModel();
  onSubmit()
  {
  this.RegisterModel.subProfession=this.form.value.profession;
  this.RegisterModel.otherProfession=this.form.value.otherProfession;
  this.RegisterModel.gender=this.form.value.gender;
  // this.RegisterModel.dob=this.form.value.dob;
  this.RegisterModel.age=this.form.value.age;
    this.RegisterModel.height=this.form.value.heigth;
    this.RegisterModel.weight=this.form.value.weight;
    this.RegisterModel.whatsapp=this.form.value.wmobile;
    this.RegisterModel.qualification=this.form.value.qualification;
    this.RegisterModel.films_course=this.form.value.course;
    this.RegisterModel.otherLanguage=this.form.value.otherlanguage;
    this.RegisterModel.aboutSelf=this.form.value.yself;
    this.RegisterModel.language=this.event;
    this.RegisterModel.address=this.form.value.address;
    this.RegisterModel.country=this.form.value.country;
    this.RegisterModel.state=this.form.value.state;
    this.RegisterModel.city=this.form.value.city;
    this.RegisterModel.zip=this.form.value.zip;
    this.RegisterModel.industry=this.form.value.industry;
    this.RegisterModel.privacy=this.form.value.privacy;
    console.log(this.RegisterModel);
    this.userService.saveActorProfile(this.userId,this.RegisterModel).subscribe(data=>{
      console.log(data);
    })
  }
  
}
