import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Deduction } from '../myservices/deduction';

@Directive({
  selector: '[appIdentifySlab]'
})
export class IdentifySlab implements OnInit{

  private targetElement = inject(ElementRef)
  private decution = inject(Deduction)

  @Input()
  appIdentifySlab=0

  ngOnInit(): void {
    this.decution.salary=this.appIdentifySlab
    this.appIdentifySlab=this.decution.calculate()
    this.targetElement.nativeElement.textContent=`Your take home ${this.appIdentifySlab}`
  }

}
