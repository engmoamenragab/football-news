import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  currentUser = new BehaviorSubject(null);
  saveCurrentUser() {
    let token: any = localStorage.getItem("userToken");
    this.currentUser.next(jwtDecode(token));
  }
  signup(signupFormData: any): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", signupFormData);
  }
  signin(signinFormData: any): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", signinFormData);
  }
}
