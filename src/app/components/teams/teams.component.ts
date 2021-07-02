import { Component, OnInit, OnDestroy } from "@angular/core";
import { FootballService } from "src/app/services/football.service";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.scss"],
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams: any[] = [];
  sub: any;
  constructor(private _FootballService: FootballService) {}
  ngOnInit(): void {
    this.sub = this._FootballService.getTeamsData("PD").subscribe(
      (response) => {
        this.teams = response.teams.slice(0, 30);
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      () => {},
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
