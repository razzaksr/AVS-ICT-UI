import { Component, provideZonelessChangeDetection } from '@angular/core';
import { IdentifySlab } from '../../mydirectives/identify-slab';

@Component({
  standalone:true,
  selector: 'app-dirctive-test',
  imports: [IdentifySlab],
  templateUrl: './dirctive-test.html',
  styleUrl: './dirctive-test.css',
})
export class DirctiveTest {
  
}
