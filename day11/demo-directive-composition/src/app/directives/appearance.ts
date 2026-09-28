import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appAppearance]',
  host:{
    '[style.background-color]':'shade()'
  }
})
export class Appearance {
  shade = input('white')
}
