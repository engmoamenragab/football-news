import { Component, OnInit, OnDestroy } from "@angular/core";
import { FootballService } from "src/app/services/football.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  teamsPd: any[] = [];
  teamsPl: any[] = [];
  teamsBl1: any[] = [];
  teamsPdSub: any;
  teamsPlSub: any;
  teamsBl1Sub: any;
  constructor(private _FootballService: FootballService) {}
  ngOnInit(): void {
    this.teamsPdSub = this._FootballService.getTeamsData("PD").subscribe(
      (response) => {
        this.teamsPd = response.teams.slice(0, 10);
      },
      (error) => {
        console.log(error);
      },
      () => {},
    );
    this.teamsPlSub = this._FootballService.getTeamsData("PL").subscribe(
      (response) => {
        this.teamsPl = response.teams.slice(0, 10);
      },
      (error) => {
        console.log(error);
      },
      () => {},
    );
    this.teamsBl1Sub = this._FootballService.getTeamsData("BL1").subscribe(
      (response) => {
        this.teamsBl1 = response.teams.slice(0, 10);
      },
      (error) => {
        console.log(error);
      },
      () => {},
    );
  }
  ngOnDestroy(): void {
    this.teamsPdSub.unsubscribe();
    this.teamsPlSub.unsubscribe();
    this.teamsBl1Sub.unsubscribe();
  }
}
