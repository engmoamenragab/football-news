import { Component, OnInit, OnDestroy } from "@angular/core";
import { FootballService } from "src/app/services/football.service";
@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.scss"],
})
export class CountriesComponent implements OnInit, OnDestroy {
  response: any;
  page: any;
  countries: any[] = [];
  filteredCountries: any[] = [];
  currentPageId: string = "";
  sub: any;
  constructor(private _FootballService: FootballService) {}
  ngOnInit(): void {
    this.getCountriesPageData();
  }
  getCountriesPageData(pageId: string = "1"): string {
    this.sub = this._FootballService.getCountriesData(pageId).subscribe(
      (response) => {
        this.response = response;
        this.countries = this.response.data;
        this.filteredCountries = this.countries.filter((item) => item.name != "Israel" && item.id != "44");
        this.page = this.response.pagination.page;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.currentPageId = this.page;
      },
    );
    return this.currentPageId;
  }
  nextPage() {}
  prevPage() {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
