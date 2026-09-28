import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentExecutioner } from './basetochild/parent-executioner/parent-executioner';
import { ParentView } from './childtosuper/parent-view/parent-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ParentExecutioner,ParentView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nesting-components-demo');
}
