import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username=""
  password=""
  constructor(private router:Router){}
  login(){
    if(this.username=="razak"&&this.password=="avsec"){
      localStorage.setItem("isLoggedIn","true")
      alert("Login successful")
      this.router.navigate(['/dash'])
    }else{
      alert("Invlaid credentials")
    }
  }
}
