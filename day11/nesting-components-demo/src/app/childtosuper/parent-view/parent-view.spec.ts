import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentView } from './parent-view';

describe('ParentView', () => {
  let component: ParentView;
  let fixture: ComponentFixture<ParentView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
