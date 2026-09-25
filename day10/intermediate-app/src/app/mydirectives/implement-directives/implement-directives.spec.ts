import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementDirectives } from './implement-directives';

describe('ImplementDirectives', () => {
  let component: ImplementDirectives;
  let fixture: ComponentFixture<ImplementDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
