import { Component } from '@angular/core';
import { Decoration } from '../decoration';
import { IdentifySlab } from '../identify-slab';
import { Elapsation } from '../elapsation';

@Component({
  selector: 'app-implement-directives',
  imports: [Decoration,IdentifySlab,Elapsation],
  templateUrl: './implement-directives.html',
  styleUrl: './implement-directives.css',
})
export class ImplementDirectives {
  imgLocation="assets/jd.png"
}
