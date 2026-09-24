import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Match } from './basics/match/match';
import { Game } from './services/game';
import { Templateform } from './basics/templateform/templateform';
import { Confirmation } from './basics/confirmation/confirmation';

@Component({
  selector: 'app-root',
  imports: [FormsModule,Match,Templateform,Confirmation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public gaming:Game){}
  // data binding
  gameName = "Contra"
  // property Binding
  locate="myassets/garena.png"
  myStyle={
    "color":"red",
    "font-size":"20px",
    "text-shadow":"10px 10px 2px black",
  }
  myFirstEvent(){
    alert("Event handled")
  }
  
  desired = "GTA 5"
}
