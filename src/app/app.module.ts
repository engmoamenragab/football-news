import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { LeaguesComponent } from "./components/leagues/leagues.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { PlayersComponent } from "./components/players/players.component";
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignoutComponent } from "./components/signout/signout.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeheaderComponent } from "./components/homeheader/homeheader.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { TeamdetailsComponent } from "./components/teamdetails/teamdetails.component";
import { CountrydetailsComponent } from "./components/countrydetails/countrydetails.component";
import { LeaguedetailsComponent } from "./components/leaguedetails/leaguedetails.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    LeaguesComponent,
    TeamsComponent,
    PlayersComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeheaderComponent,
    TeamdetailsComponent,
    CountrydetailsComponent,
    LeaguedetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
