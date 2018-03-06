import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userprofilecopy',
  templateUrl: './userprofilecopy.component.html',
  styleUrls: ['./userprofilecopy.component.css']
})
export class UserprofilecopyComponent implements OnInit {
userName;
  constructor() { 
    const user=JSON.parse(localStorage.getItem('userCopy'));
    this.userName=user;
    console.log("username is coming--------"+this.userName.actorId);
    console.log("usersubprofession:"+this.userName.subProfession);
    console.log("usersubprofession:"+this.userName.otherProfession);
    console.log("usersubprofession:"+this.userName.gender);
    console.log("usersubprofession:"+this.userName.dob);
    console.log("usersubprofession:"+this.userName.age);
    console.log("usersubprofession:"+this.userName.height);
    console.log("usersubprofession:"+this.userName.weight);
    console.log("usersubprofession:"+this.userName.whatsapp);
    console.log("usersubprofession:"+this.userName.qualification);
    console.log("usersubprofession:"+this.userName.filmCourse);
    console.log("usersubprofession:"+this.userName.language);
    console.log("usersubprofession:"+this.userName.otherLanguage);
    console.log("usersubprofession:"+this.userName.address);
    console.log("usersubprofession:"+this.userName.state);
    console.log("usersubprofession:"+this.userName.aboutSelf);
    console.log("usersubprofession:"+this.userName.city);
    console.log("usersubprofession:"+this.userName.aboutSelf);
    console.log("usersubprofession:"+this.userName.zip);
    console.log("usersubprofession:"+this.userName.industry);

  }

  ngOnInit() {
  }
  
}
