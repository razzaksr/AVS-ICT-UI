import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduce } from './introduce';

describe('Introduce', () => {
  let component: Introduce;
  let fixture: ComponentFixture<Introduce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introduce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
