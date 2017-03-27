import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  constructor(private element: ElementRef,
              private renderer: Renderer) {
  }

  ngOnInit(){
    this.renderer.invokeElementMethod(
        this.element.nativeElement,
        'focus'
    )
  }
}


