import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {

  popUp=null;

  onCallPreview(mediaItem){
  
  this.popUp=mediaItem;
  }

  onCallClose(mediaItem)
  {
    this.popUp=null;
  }
 }
