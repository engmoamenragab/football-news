import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FootballService {
  constructor(private _HttpClient: HttpClient) {}
  getCountriesData(pgId: string): Observable<any> {
    return this._HttpClient.get(`https://elenasport-io1.p.rapidapi.com/v2/countries?page=${pgId}`, {
      headers: {
        "x-rapidapi-key": "ed4b0c1094mshc5213f5f17f05a4p1fa15ajsnabf8e3760897",
        "x-rapidapi-host": "elenasport-io1.p.rapidapi.com",
      },
    });
  }
  getLeaguesData(): Observable<any> {
    return this._HttpClient.get("https://apiv2.allsportsapi.com/football?met=Leagues&APIkey=c2db72a03da05511199e729bec2705d006e26822f7f7ef94a1433c6f80eee29c");
  }
  getTeamsData(league: string): Observable<any> {
    return this._HttpClient.get(`https://api.football-data.org/v2/competitions/${league}/teams`, {
      headers: {
        "X-Auth-Token": "dea60b8895104e42b2b503e625627c09",
      },
    });
  }
  getTeamDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.football-data.org/v2/teams/${id}`, {
      headers: {
        "X-Auth-Token": "dea60b8895104e42b2b503e625627c09",
      },
    });
  }
}

// AllSportsApi
// https://apiv2.allsportsapi.com/football?met=${variable}&APIkey=c2db72a03da05511199e729bec2705d006e26822f7f7ef94a1433c6f80eee29c

// Football Data
// dea60b8895104e42b2b503e625627c09
