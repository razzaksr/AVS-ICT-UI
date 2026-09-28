import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child-associate',
  imports: [],
  templateUrl: './child-associate.html',
  styleUrl: './child-associate.css',
})
export class ChildAssociate {
  beneficiaryName = input.required<string>()
  transferredAmount = input.required<number>()
  transferredType = input.required<string>()
}
