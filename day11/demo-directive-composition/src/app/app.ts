import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoDirectives } from './components/demo-directives/demo-directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DemoDirectives],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-directive-composition');
}
