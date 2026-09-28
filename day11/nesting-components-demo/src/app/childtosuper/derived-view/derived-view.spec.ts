import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivedView } from './derived-view';

describe('DerivedView', () => {
  let component: DerivedView;
  let fixture: ComponentFixture<DerivedView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerivedView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivedView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
