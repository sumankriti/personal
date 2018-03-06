import { UserService } from './../services/uservice.service';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userId;
  userName;
  userUniqueId;
  gender;
  age;
  height;
  weight;
  whatsapp;
  mobile;
  email;
  qualification;
  filmsCourse;
  language;
  otherLanguage;
  privacy;
  aboutSelf;
  address;
  country;
  state;
  city;
  zip;
  constructor(private router:ActivatedRoute,private service:UserService) { 
   
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.userId=params.get('id');
      console.log(this.userId);
      this.service.getUserById(this.userId).subscribe(data=>{
        this.userName=data.name;
        this.userUniqueId=data.user_unique_id;
        this.mobile=data.mobile;
        this.email=data.email;
        this.service.getActor(this.userId).subscribe(actorData=>{
          console.log(actorData);
         this.gender=actorData.gender;
       this.age=actorData.age;
       this.height=actorData.height;
       this.weight=actorData.weight;
          this.whatsapp=actorData.whatsapp;
          this.qualification=actorData.qualification;
          this.filmsCourse=actorData.filmsCourse;
          this.language=actorData.language;
          this.otherLanguage=actorData.otherLanguage;
          this.privacy=actorData.privacy;
          this.aboutSelf=actorData.aboutSelf;
          this.address=actorData.address;
          this.country=actorData.country;
          this.state=actorData.state;
          this.city=actorData.city;
          this.zip=actorData.zip;
       
        })
      })
    })
  }

}
