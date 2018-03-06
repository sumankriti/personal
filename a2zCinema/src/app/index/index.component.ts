import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public safeURL;
public videoUrl='http://player.vimeo.com/video/63534746';
  constructor(private router:Router,private sanitizer:DomSanitizer)
  {
    this.safeURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
     
  }
  onClick()
  {
    this.router.navigateByUrl('/Home/first');
  }
}
