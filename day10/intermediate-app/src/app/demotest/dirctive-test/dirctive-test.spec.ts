import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirctiveTest } from './dirctive-test';

describe('DirctiveTest', () => {
  let component: DirctiveTest;
  let fixture: ComponentFixture<DirctiveTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirctiveTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirctiveTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
