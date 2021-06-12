import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "./components/countries/countries.component";
import { HomeComponent } from "./components/home/home.component";
import { LeaguesComponent } from "./components/leagues/leagues.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { PlayersComponent } from "./components/players/players.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", canActivate: [AuthGuard], component: HomeComponent },
  { path: "countries", canActivate: [AuthGuard], component: CountriesComponent },
  { path: "leagues", canActivate: [AuthGuard], component: LeaguesComponent },
  { path: "teams", canActivate: [AuthGuard], component: TeamsComponent },
  { path: "players", canActivate: [AuthGuard], component: PlayersComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
