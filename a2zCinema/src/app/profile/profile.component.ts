import { UserService } from './../services/userservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId;
userData;
actorData;
  constructor(private router:ActivatedRoute,private service:UserService) { 
  }
ngOnInit()
{
  
  const user=JSON.parse(localStorage.getItem('userData'));
  console.log("userId is coming:"+user.user_id);
  this.userId=user.user_id
  this.service.getUserById(this.userId).subscribe(res=>{
    this.userData=res;
  });
  this.service.getActor(this.userId).subscribe(res=>{
   this.actorData=res;
   console.log(this.actorData);
  })
}
isLogin=true;
}
