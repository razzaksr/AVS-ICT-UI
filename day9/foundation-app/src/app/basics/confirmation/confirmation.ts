import { Component, inject } from '@angular/core';
import { Hackathon } from '../../services/hackathon';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation {
  saved = inject(Hackathon)
}
