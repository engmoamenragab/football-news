import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FootballService } from "src/app/services/football.service";

@Component({
  selector: "app-countrydetails",
  templateUrl: "./countrydetails.component.html",
  styleUrls: ["./countrydetails.component.scss"],
})
export class CountrydetailsComponent implements OnInit, OnDestroy {
  id: string = "";
  countryDetails: any = {};
  sub: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _FootballService: FootballService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
