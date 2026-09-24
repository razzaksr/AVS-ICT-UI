import { TestBed } from '@angular/core/testing';

import { Hackathon } from './hackathon';

describe('Hackathon', () => {
  let service: Hackathon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hackathon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
