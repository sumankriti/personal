import { UserService } from './services/userservice.service';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {Router,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';

import * as moment from 'moment';
import { SecondComponent } from './second/second.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HirerentjoinComponent } from './hirerentjoin/hirerentjoin.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrowdfundingComponent } from './crowdfunding/crowdfunding.component';
import { AuditionComponent } from './audition/audition.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    IndexpageComponent,
    ProfileComponent,
    FirstComponent,
    SecondComponent,
    UpdateuserComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    HirerentjoinComponent,
    CrowdfundingComponent,
    AuditionComponent,
    ViewprofileComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
    }),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [UserService,{ provide: 'moment', useValue: moment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
