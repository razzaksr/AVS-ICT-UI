import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Match } from './match';

describe('Match', () => {
  let component: Match;
  let fixture: ComponentFixture<Match>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Match]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Match);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
