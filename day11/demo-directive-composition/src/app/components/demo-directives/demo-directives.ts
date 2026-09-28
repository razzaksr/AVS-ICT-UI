import { Component } from '@angular/core';
import { Appearance } from '../../directives/appearance';
import { Tooltip } from '../../directives/tooltip';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-demo-directives',
  imports: [],
  templateUrl: './demo-directives.html',
  styleUrl: './demo-directives.css',
  host:{
    'style':`
      display:block;
      transition: all .3s ease;
      padding: 30px;
      border-radius:20px;
      border: 2px solid grey;
      margin: 10px;
    `
  },
  hostDirectives:[
    Highlight,
    {directive:Appearance,inputs:['shade:cardColor']},
    {directive:Tooltip,inputs:['info:tips']}
  ]
})
export class DemoDirectives {

}
