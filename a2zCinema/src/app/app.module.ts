import { UserService } from './services/uservice.service';
import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Router} from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AuditionsComponent } from './auditions/auditions.component';
import { HireRentJoinComponent } from './hire-rent-join/hire-rent-join.component';
import { CrowdFundingComponent } from './crowd-funding/crowd-funding.component';
import { MovieDistributionComponent } from './movie-distribution/movie-distribution.component';
import { ShortfilmHubComponent } from './shortfilm-hub/shortfilm-hub.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ActorComponent } from './actor/actor.component';
import { RegisterComponent } from './register/register.component';

import { CrousaleffectComponent } from './crousaleffect/crousaleffect.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserprofilecopyComponent } from './userprofilecopy/userprofilecopy.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AuditionsComponent,
    HireRentJoinComponent,
    CrowdFundingComponent,
    MovieDistributionComponent,
    ShortfilmHubComponent,
    SubscriptionComponent,
    HomeComponent,
    ActorComponent,
    RegisterComponent,
    CrousaleffectComponent,
    UserdetailsComponent,
    FirstComponent,
    UserprofileComponent,
    UserprofilecopyComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
{path:'',component:IndexComponent},
{path:'auditions',component:AuditionsComponent},
  {path:'hirerentjoin',component:HireRentJoinComponent},
  {path:'crowdfunding',component:CrowdFundingComponent},
  {path:'moviedistribution',component:MovieDistributionComponent},
  {path:'shortfilhub',component:ShortfilmHubComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'home',component:HomeComponent},
  {path:'actor',component:ActorComponent},
  {path:'register',component:RegisterComponent},
  {path:'crousaleffect',component:CrousaleffectComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'first',component:FirstComponent},
  {path:'userprofile/:id',component:UserprofileComponent},
  {path:'userprofilecopy',component:UserprofilecopyComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'first/:id',component:FirstComponent}
  
  
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
