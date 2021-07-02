import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguedetailsComponent } from './leaguedetails.component';

describe('LeaguedetailsComponent', () => {
  let component: LeaguedetailsComponent;
  let fixture: ComponentFixture<LeaguedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
