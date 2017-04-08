import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:"mw-popup",
    templateUrl:"app/popup.component.html",
    styleUrls: ['app/popup.component.css']
})
export class PopupComponent{
  @Input() mediaItem;
  
  
  @Output() close=new EventEmitter();
 
  index =1;

  onClose(){
    this.close.emit();
  }

  onPrev(){
    
    this.index=this.index-1;
    if(this.index<1)
    {
      this.index=this.gambar.length;
    }
  }

  onNext(){
    
    this.index=this.index+1;

    if(this.index>this.gambar.length)
    {
      this.index=1;
    }
  }

  isVisible(){
    return this.mediaItem ? false:true;
  }

  gambar=[{
    id:1,
    URL:"./media/01.png"

  },
  {
    id:2,
    URL:"./media/02.png"

  },
  {
    id:3,
    URL:"./media/03.png"

  },
  {
    id:4,
    URL:"./media/04.png"

  },
  ]
}