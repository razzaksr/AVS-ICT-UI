import { TestBed } from '@angular/core/testing';

import { Game } from './game';

describe('Game', () => {
  let service: Game;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Game);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
