import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  host:{
    '[attr.title]':'info()'
  }
})
export class Tooltip {
  info = input("AVS Campus Connection")
}
