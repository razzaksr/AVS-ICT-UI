import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-demo-animate',
  imports: [],
  templateUrl: './demo-animate.html',
  styleUrl: './demo-animate.css',
})
export class DemoAnimate {
  isAnim = signal(false)
  enableDisable(){
    this.isAnim.update(value=>!value)
  }
  technician={
    "name":"Sabarinathan",
    "works":["AC","Reridgerator"],
    "baselocation":"Salem"
  }
}
