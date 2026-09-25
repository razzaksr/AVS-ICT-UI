import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementDirectives } from './implement-directives';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ImplementDirectives', () => {
  let component: ImplementDirectives;
  let fixture: ComponentFixture<ImplementDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementDirectives],
      providers:[provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImplementDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Razak Mohamed Salary test',()=>{
    const elem = fixture.nativeElement.querySelector("h1")
    expect(elem.textContent.trim()).toContain('Your take home 3.5')
  })
  it('Razak Mohamed Salary test failing',()=>{
    const elem = fixture.nativeElement.querySelector("h1")
    expect(elem.textContent.trim()==='Your take home 3.325').toBeFalse()
  })
  it('Hameed Salary test ',()=>{
    const elem = fixture.nativeElement.querySelector("strong")
    expect(elem.textContent.trim()==='Your take home 12.48').toBeTrue()
  })
});
