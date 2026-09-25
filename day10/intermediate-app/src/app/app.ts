import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoAnimate } from './anims/demo-animate/demo-animate';
import { ImplementDirectives } from './mydirectives/implement-directives/implement-directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DemoAnimate,ImplementDirectives],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('intermediate-app');
}
