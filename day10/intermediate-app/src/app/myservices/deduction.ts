import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Deduction {
  salary=0
  calculate(){
    if(this.salary>=30){
      this.salary-=((this.salary)*30)/100
    }else if(this.salary>12&&this.salary<=15){
      this.salary-=((this.salary)*10)/100
    }else if(this.salary>15&&this.salary<=20){
      this.salary-=((this.salary)*20)/100
    }else if(this.salary>20&&this.salary<=30){
      this.salary-=((this.salary)*25)/100
    }else{
      console.log(this.salary+" no need to pay tax")
    }
    return this.salary
  }
}
