import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivedform } from './reactivedform';

describe('Reactivedform', () => {
  let component: Reactivedform;
  let fixture: ComponentFixture<Reactivedform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactivedform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivedform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
