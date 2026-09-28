import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  host:{
    '(click)':'scroll()',
    '[style.cursor]':'"pointer"'
  }
})
export class ScrollTo {
  appScrollTo=input.required<string>()
  scroll(){
    const elem = document.getElementById(this.appScrollTo())
    elem?.scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  }
}
