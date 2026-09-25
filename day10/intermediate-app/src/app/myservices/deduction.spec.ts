import { TestBed } from '@angular/core/testing';

import { Deduction } from './deduction';

describe('Deduction', () => {
  let service: Deduction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deduction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
