import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AuditionComponent } from './audition/audition.component';
import { CrowdfundingComponent } from './crowdfunding/crowdfunding.component';
import { HirerentjoinComponent } from './hirerentjoin/hirerentjoin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

import { SecondComponent } from './second/second.component';

import { ProfileComponent } from './profile/profile.component';
import { FirstComponent } from './first/first.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";


export const AppRoutes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
        {path:'',component:IndexpageComponent},
        {path:'profile',component:ProfileComponent},
      
        {path:'second',component:SecondComponent},
        {path:'updateuser/:id',component:UpdateuserComponent},
        {path:'changepassword',component:ChangepasswordComponent},
        {path:'forgotpassword',component:ForgotpasswordComponent},
        {path:'hirerentjoin',component:HirerentjoinComponent},
        {path:'crowdfunding',component:CrowdfundingComponent},
       {path:'audition',component:AuditionComponent},
       {path:'viewprofile',component:ViewprofileComponent}
      
      ]},
   {path:'first',component:FirstComponent}
    ];