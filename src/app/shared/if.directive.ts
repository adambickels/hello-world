import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private ref:ViewContainerRef,
              private template:TemplateRef<any>) {
  }


  @Input()
  set appIf (val:boolean){
    val ? this.ref.createEmbeddedView(this.template)
        : this.ref.clear()
  };


}
