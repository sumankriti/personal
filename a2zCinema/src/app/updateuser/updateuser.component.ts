import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../services/userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfile } from './../model/profile.model';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { IMyDateModel, IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId;
  userName:string;
  language;
  actorId;
  data;
  dateMoment;
  timeSee:string;
  paramId;
  userDetail:any;
  actorDetail:any;
  subProfession
  otherProfession;
  DOB:any;
  startDate: Object ={formatted:this.DOB};
//  startDate: Object = { date: { year: 2008, month:11, day:22 }    };
 Gender;
  Age;
  Height;
  Weight;
  Mobile;
  Whatsapp;
  Qualification;
  Course;
  Otherlanguage;
  Yself;
  Address;
  Country;
  State;
  Industry;
  City;
  Zip;
  Privacy;
  
  @ViewChild('fileInput') fileInput: ElementRef;
  date;
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };
    constructor(private service:UserService,private route:Router,@Inject('moment') private moment,private routing:ActivatedRoute)
    {
   
    }
   ngOnInit()
   {
    this.routing.paramMap.subscribe(params=>{
     this.paramId=params.get('id');
     console.log("userId is coming:"+this.paramId);
    this.service.getUserById(this.paramId).subscribe(data=>{
      this.userDetail=data;
      this.Mobile=this.userDetail.mobile;
      localStorage.setItem('userData',JSON.stringify(data))

    })
    })
     const user=JSON.parse(localStorage.getItem('userData'));
     this.userName=user.name;
     this.userId=user.user_id;
  this.service.getActor(this.userId).subscribe(res=>{
    this.actorDetail=res;
    this.otherProfession=this.actorDetail.otherProfession;
   this.DOB=this.actorDetail.dob;
   console.log("this date is coming"+this.DOB);
   this.dateMoment=this.actorDetail.age;
   this.Height=this.actorDetail.height;
   this.Weight=this.actorDetail.weight;
   this.Whatsapp=this.actorDetail.whatsapp;
   this.Qualification=this.actorDetail.qualification;
   this.Course=this.actorDetail.filmsCourse;
   this.Otherlanguage=this.actorDetail.otherLanguage;
   this.Yself=this.actorDetail.aboutSelf;
   this.Address=this.actorDetail.address;
   this.subProfession=this.actorDetail.subProfession;
   this.Gender=this.actorDetail.gender;
   this.Country=this.actorDetail.country;
   this.State=this.actorDetail.state;
   this.Industry=this.actorDetail.industry;
   this.City=this.actorDetail.city;
   this.Zip=this.actorDetail.zip;
   this.Privacy=this.actorDetail.privacy;
    console.log(this.actorDetail);
    
    console.log(res.actor_back_profile_id);
    this.actorId=res.actor_back_profile_id;
   
  })
   }
   profession=[{id:1,name:'Actor'},{id:2,name:'Actress'},{id:3,name:'Model'},{id:4,name:'Suppoting Actor'},
   {id:5,name:'Supporting Actress'},{id:6,name:'Junior Artist'},{id:7,name:'Child Actor'},{id:8,name:'Child Actress'}
   ]
   genders=[{id:1,name:'Male'},{id:2,name:'Female'},{id:3,name:'Other'}];
   height=[{id:1,name:'5 feet 2 inches'},{id:2,name:'5 feet 3 inches'},{id:3,name:'5 feet 5 inches'}];
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
   privacy=[{id:1,name:'Public'},{id:2,name:'Private'}];
  
  
  form =new FormGroup({
    profession:new FormControl('',Validators.required),
    otherProfession:new FormControl(),
    gender:new FormControl(),
    age:new FormControl(),
    heigth:new FormControl(),
    weight:new FormControl(),
    mobile:new FormControl(),
    wmobile:new FormControl(),
    qualification:new FormControl(),
    course:new FormControl(),
    language:new FormControl(),
    otherlanguage:new FormControl(),
    yself:new FormControl(),
    address:new FormControl(),
    country:new FormControl(),
    state:new FormControl(),
    city:new FormControl(),
    zip:new FormControl(),
    industry:new FormControl(),
    privacy:new FormControl(),
    avatar:new FormControl(),
    myDate:new FormControl(),
    terms:new FormControl()
  });
  
  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }
  onCheckChange(event)
  {
  this.language=event.target.value;
  console.log(this.language);
  }
  onTerms(event)
  {
    console.log(event.target.value);
  }
  onDateChanged(event: IMyDateModel) {
    this.date= event.formatted;
   this.timeSee= this.moment(this.date,"DD/MM/YYYY").fromNow();
   var st=this.timeSee.replace('ago','');
  this.dateMoment=st;
   }
  actor=new UserProfile();
  onSubmit()
  {
    this.form.patchValue({
      profession:this.subProfession,
      otherProfession:this.otherProfession,
      country:this.Country,
      age:this.dateMoment,
      weight:this.Weight,
      mobile:this.Mobile,
      wmobile:this.Whatsapp,
      qualification:this.Qualification,
      course:this.Course,
      otherlanguage:this.Otherlanguage,
      yself:this.Yself,
      address:this.Address,
      state:this.State,
      industry:this.Industry,
      city:this.City,
      zip:this.Zip,
      privacy:this.Privacy
    })
    this.actor.actor_back_profile_id=this.actorId;
    this.actor.user_id=this.userId;
   this.actor.subProfession=this.form.value.profession;
   this.actor.otherProfession=this.form.value.otherProfession;
   this.actor.gender=this.form.value.gender;
   this.actor.age=this.form.value.age;
   this.actor.height=this.form.value.heigth;
   this.actor.weight=this.form.value.weight;
   this.actor.whatsapp=this.form.value.wmobile;
   this.actor.qualification=this.form.value.qualification;
   this.actor.films_course=this.form.value.course;
   this.actor.language=this.language;
   this.actor.otherLanguage=this.form.value.otherlanguage;
   this.actor.aboutSelf=this.form.value.yself;
   this.actor.address=this.form.value.address;
  this.actor.country=this.form.value.country;
  this.actor.state=this.form.value.state;
  this.actor.city=this.form.value.city;
  this.actor.zip=this.form.value.zip;
  this.actor.industry=this.form.value.industry;
  this.actor.privacy=this.form.value.privacy;
  this.actor.user_pic=this.form.value.avatar.filename;
  this.actor.dob=this.form.value.myDate.formatted;
  
  //this.actor.dob=this.form.value.myDate.formatted;
  console.log(this.form.value);
  
  this.service.saveActor(this.actor).subscribe(res=>{
    this.route.navigate(['/profile']);
    console.log(res);
  })
  this.form.reset();
  }
}
