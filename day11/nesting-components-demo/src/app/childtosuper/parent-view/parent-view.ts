import { Component } from '@angular/core';
import { DerivedView } from '../derived-view/derived-view';

@Component({
  selector: 'app-parent-view',
  imports: [DerivedView],
  templateUrl: './parent-view.html',
  styleUrl: './parent-view.css',
})
export class ParentView {
  products=[
    {
      "name":"Zero Balance Account",
      "age":18,
      "amenitites":"ATM Card",
      "min":0
    },
    {
      "name":"Savings Account",
      "age":50,
      "amenitites":"ATM Card, Netbanking",
      "min":1000
    },
    {
      "name":"Demat Account",
      "age":40,
      "amenitites":"Netbanking, Mobile banking",
      "min":0
    }
  ]

  onKnowMore(data:string){
    alert(`Thanks for selecting ABC Bank's ${data} product`)
  }
}
