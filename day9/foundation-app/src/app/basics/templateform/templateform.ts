import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hackathon } from '../../services/hackathon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {
  constructor(private router:Router){}
  // hack = new Hackathon()
  hack = inject(Hackathon)
  handleSubmit(){
    alert(this.hack.eventName+" scheduled")
  }
  whenLogout(){
    localStorage.removeItem("isLoggedIn")
    this.router.navigate(['/login'])
  }
}
