import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAssociate } from './child-associate';

describe('ChildAssociate', () => {
  let component: ChildAssociate;
  let fixture: ComponentFixture<ChildAssociate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAssociate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAssociate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
