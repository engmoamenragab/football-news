import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FootballService } from "src/app/services/football.service";

@Component({
  selector: "app-leaguedetails",
  templateUrl: "./leaguedetails.component.html",
  styleUrls: ["./leaguedetails.component.scss"],
})
export class LeaguedetailsComponent implements OnInit, OnDestroy {
  league_key: string = "";
  leagueDetails: any = {};
  sub: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _FootballService: FootballService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
