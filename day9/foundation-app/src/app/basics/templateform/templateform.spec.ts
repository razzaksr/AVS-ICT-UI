import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateform } from './templateform';

describe('Templateform', () => {
  let component: Templateform;
  let fixture: ComponentFixture<Templateform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templateform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
