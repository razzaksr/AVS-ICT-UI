import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host:{
    '(mouseenter)':'hovered.set(true)',
    '(mouseleave)':'hovered.set(false)',
    '[style.transform]':'hovered()?"scale(1.03)":"scale(1)"'
  }
})
export class Highlight {
  hovered=signal(false)
}
