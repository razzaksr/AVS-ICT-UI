import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listall } from './listall';

describe('Listall', () => {
  let component: Listall;
  let fixture: ComponentFixture<Listall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
