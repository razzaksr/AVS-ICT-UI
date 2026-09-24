import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivedform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactivedform.html',
  styleUrl: './reactivedform.css',
})
export class Reactivedform {
  constructor(private router:Router){}
  info=""
  SchduleForm = new FormGroup({
    eventName:new FormControl('',[Validators.pattern('^[A-Za-z0-9 ]{2,}$')]),
    eventTopics:new FormControl('',[Validators.required,Validators.minLength(2)]),
    eventDate:new FormControl('',Validators.required),
    eventReward:new FormControl('',Validators.pattern('^[0-9]{5,}$')),
    eventOrganizer:new FormControl('',Validators.required),
    eventVenue:new FormControl('',Validators.required)
  })
  whenSubmit(){
    if(this.SchduleForm.valid){
      this.info="Hackathon Scheduled"
    }else{
      this.SchduleForm.markAllAsTouched();
      this.info="Hackathon Schedule cancelled"
    }
  }
  whenLogout(){
    localStorage.removeItem("isLoggedIn")
    this.router.navigate(['/login'])
  }
}
