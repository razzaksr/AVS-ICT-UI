import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTo } from './directives/scroll-to';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ScrollTo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('compdirect-app');
}
