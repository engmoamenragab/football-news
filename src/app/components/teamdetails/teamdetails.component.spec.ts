import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamdetailsComponent } from "./teamdetails.component";

describe("DetailsComponent", () => {
  let component: TeamdetailsComponent;
  let fixture: ComponentFixture<TeamdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamdetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
