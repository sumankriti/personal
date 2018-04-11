import { UserService } from './../services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HireModel } from '../model/hireRent.model';

@Component({
  selector: 'hirerentjoin',
  templateUrl: './hirerentjoin.component.html',
  styleUrls: ['./hirerentjoin.component.css']
})
export class HirerentjoinComponent implements OnInit {
hireRent:any;
hireId:any[];
  constructor(private service:UserService) { }

  ngOnInit() {
    
  }
state=[{id:1,name:'Andhra Pradesh'},{id:2,name:'Arunachal Pradesh'},{id:3,name:'Assam'},{id:4,name:'Bihar'},
{id:5,name:'Goa'},{id:6,name:'Gujarat'},{id:7,name:'Haryana'},{id:8,name:'Himachal Pradesh'},
{id:9,name:'Jammu & Kashmir'},{id:10,name:'Karnataka'},{id:11,name:'Kerala'},{id:12,name:'Madhya Pradesh'},
{id:13,name:'Maharashtra'},{id:14,name:'Manipur'},{id:15,name:'Meghalaya'},{id:16,name:'Mizoram'},
{id:17,name:'Nagaland'},{id:18,name:'Orissa'},{id:19,name:'Punjab'},{id:20,name:'Rajasthan'},{id:21,name:'Sikkim'},
{id:22,name:'Tamil Nadu'},{id:23,name:'Tripura'},{id:24,name:'Uttar Pradesh'},{id:25,name:'West Bengal'},
{id:26,name:'Chhattisgarh'},{id:27,name:'Uttarakhand'},{id:28,name:'Jharkhand'},{id:29,name:'Telangana'}
];
industry=[{id:1,name:'Bollywood'},{id:2,name:'Hollywood'},{id:3,name:'Tollywood'}];
location=[{id:1,name:'Adalaj'},{id:2,name:'Adra'},{id:3,name:'Bangalore'},{id:3,name:'Etawah'}];
profession=[{id:1,name:'Actor'},{id:2,name:'Actress'},{id:3,name:'Support'}];

form=new FormGroup({
  user:new FormControl('',Validators.required),
  state:new FormControl('',Validators.required),
  industry:new FormControl('',Validators.required),
  location:new FormControl('',Validators.required),
  profession:new FormControl('',Validators.required)
})
hire= new HireModel();
onSubmit()
{
  this.hire.user=this.form.value.user;
 this.service.getUserByName(this.hire.user).subscribe(res=>{
  this.hireRent=res;
  console.log(this.hireRent);
  for(let i=0;i<this.hireRent.user_id;i++)
  {
    console.log("working");
  }
 })
 
}
}
