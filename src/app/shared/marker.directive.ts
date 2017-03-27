import {Directive, ElementRef, HostListener, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {
  private element: ElementRef;
  private renderer: Renderer;

  constructor(element: ElementRef, renderer: Renderer) {
    this.element  = element;
    this.renderer = renderer;
  }


  toggleMark(state: boolean){
    this.renderer.setElementStyle(
        this.element.nativeElement,
        'background-color',
        state ? 'yellow' : ''
    )
  }

  @HostListener('mouseover')
  private setMarker(){
    this.toggleMark(true)
  }

  @HostListener('mouseleave')
  private removeMarker(){
    this.toggleMark(false)
  }





}
