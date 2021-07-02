import { Component, OnInit, OnDestroy } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { FootballService } from "src/app/services/football.service";

@Component({
  selector: "app-homeheader",
  templateUrl: "./homeheader.component.html",
  styleUrls: ["./homeheader.component.scss"],
})
export class HomeheaderComponent implements OnInit, OnDestroy {
  teams: any[] = [];
  sub: any;
  constructor(private _FootballService: FootballService) {}
  ngOnInit(): void {
    this.sub = this._FootballService.getTeamsData("PL").subscribe(
      (response) => {
        this.teams = response.teams.slice(0, 30);
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 5,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };
}
