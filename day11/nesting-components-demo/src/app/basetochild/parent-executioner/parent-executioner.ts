import { Component } from '@angular/core';
import { ChildAssociate } from '../child-associate/child-associate';

@Component({
  selector: 'app-parent-executioner',
  imports: [ChildAssociate],
  templateUrl: './parent-executioner.html',
  styleUrl: './parent-executioner.css',
})
export class ParentExecutioner {
  merchant="Annamalai S"
  payable=19884.99
  type="NEFT"
}
