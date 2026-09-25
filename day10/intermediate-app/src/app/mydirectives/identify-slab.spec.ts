import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentifySlab } from './identify-slab';
import { DirctiveTest } from '../demotest/dirctive-test/dirctive-test';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IdentifySlab', () => {
  let fixture:ComponentFixture<DirctiveTest>;
  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      imports:[DirctiveTest],
      providers:[provideZonelessChangeDetection()]
    }).compileComponents()
    fixture=TestBed.createComponent(DirctiveTest)
    fixture.detectChanges()
  })
  it('should create host instance', () => {
    expect(fixture.componentInstance).toBeTruthy()
  });
  it('should modify h1 content',()=>{
    const h1=fixture.nativeElement.querySelector("h1")
    expect(h1.textContent.trim()).toContain('Your take home')
  })
  it('should display calculated salary',()=>{
    const elem = fixture.nativeElement.querySelector("h1")
    expect(elem.textContent.trim()).toContain('15.975')
  })
});
