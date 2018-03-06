import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      console.log(params.get('id'));
    })
  }

}
