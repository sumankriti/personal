import { Component, OnInit, Inject } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  timeSee;
  date;
  constructor(@Inject('moment') private moment) { 
   
  }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};
private _success = new Subject<string>();
staticAlertClosed = false;
  successMessage: string;
  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
  onDateChanged(event: IMyDateModel) {
   
   console.log("date is coming");
   console.log(event.formatted);
   this.date=event.formatted;
}
form =new FormGroup({
  myDate:new FormControl('',Validators.required)
})
onSubmit()
{
  this.date=this.form.value.myDate.formatted;
  console.log(this.form.value.myDate);
}
  onClick()
  {
    console.log("something is coming")
    //this.timeSee=this. moment("20111031", "YYYYMMDD").fromNow();
    this.timeSee=this.moment(this.date,"DD/MM/YYYY").fromNow();
    console.log(this.timeSee);
    console.log(this.date);
  }
  
}
