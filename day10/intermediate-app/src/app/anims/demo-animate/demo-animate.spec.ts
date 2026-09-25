import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimate } from './demo-animate';

describe('DemoAnimate', () => {
  let component: DemoAnimate;
  let fixture: ComponentFixture<DemoAnimate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAnimate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoAnimate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
