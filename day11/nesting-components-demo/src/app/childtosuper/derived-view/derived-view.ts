import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-derived-view',
  imports: [],
  templateUrl: './derived-view.html',
  styleUrl: './derived-view.css',
})
export class DerivedView {
  product = input.required<string>()
  age = input.required<number>()
  features=input.required<string>()
  balance = input.required<number>()
  action=output<string>()
}
