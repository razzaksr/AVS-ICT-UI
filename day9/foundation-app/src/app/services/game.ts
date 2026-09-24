import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Game {
  name:string
  genre:string
  device:string
  constructor(){
    this.name=""
    this.genre=""
    this.device=""
  }
  // setter getter
  setName(nm:string){this.name=nm}
  getName(){return this.name}
  setGenre(gn:string){this.genre=gn}
  getGenre(){return this.genre}
  setDevice(dv:string){this.device=dv}
  getDevice(){return this.device}
}
