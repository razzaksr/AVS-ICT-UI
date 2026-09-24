import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-match',
  imports: [UpperCasePipe,LowerCasePipe,CurrencyPipe],
  templateUrl: './match.html',
  styleUrl: './match.css',
})
export class Match {
  game={
    "name":"Garena Free Fire",
    "genre":"Arcade",
    "device":"Mobile,Desktop",
    "cost":45
  }
}
