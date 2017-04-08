import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myImage]'
})
export class ImageDirective {
 
  @HostBinding('class.is-image-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  
  
}
