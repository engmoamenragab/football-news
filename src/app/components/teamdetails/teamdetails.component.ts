import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FootballService } from "src/app/services/football.service";

@Component({
  selector: "app-teamdetails",
  templateUrl: "./teamdetails.component.html",
  styleUrls: ["./teamdetails.component.scss"],
})
export class TeamdetailsComponent implements OnInit, OnDestroy {
  id: string = "";
  teamDetails: any = {};
  sub: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _FootballService: FootballService) {}
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this.sub = this._FootballService.getTeamDetails(this.id).subscribe(
      (response) => {
        this.teamDetails = response;
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
