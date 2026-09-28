import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentExecutioner } from './parent-executioner';

describe('ParentExecutioner', () => {
  let component: ParentExecutioner;
  let fixture: ComponentFixture<ParentExecutioner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentExecutioner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentExecutioner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
