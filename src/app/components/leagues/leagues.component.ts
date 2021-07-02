import { Component, OnInit, OnDestroy } from "@angular/core";
import { FootballService } from "src/app/services/football.service";

@Component({
  selector: "app-leagues",
  templateUrl: "./leagues.component.html",
  styleUrls: ["./leagues.component.scss"],
})
export class LeaguesComponent implements OnInit, OnDestroy {
  leagues: any[] = [];
  filteredLeagues: any[] = [];
  sub: any;
  constructor(private _FootballService: FootballService) {}
  ngOnInit(): void {
    this.sub = this._FootballService.getLeaguesData().subscribe(
      (response) => {
        this.leagues = response.result.slice(0, 24);
        this.filteredLeagues = this.leagues.filter((item) => item.country_name != "Israel" && item.country_key != "62");
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
