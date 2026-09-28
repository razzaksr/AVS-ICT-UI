import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listall } from './components/listall/listall';
import { Introduce } from './components/introduce/introduce';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Listall,Introduce],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('json-crud-app');
}
