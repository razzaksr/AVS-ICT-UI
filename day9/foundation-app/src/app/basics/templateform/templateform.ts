import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hackathon } from '../../services/hackathon';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {
  // hack = new Hackathon()
  hack = inject(Hackathon)
  handleSubmit(){
    alert(this.hack.eventName+" scheduled")
  }
}
