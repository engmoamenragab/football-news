import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isSignin: boolean = false;

  constructor(private _AuthService: AuthService) {
    _AuthService.currentUser.subscribe(() => {
      if (_AuthService.currentUser.getValue() != null) {
        this.isSignin = true;
      } else {
        this.isSignin = false;
      }
    });
  }

  ngOnInit(): void {}
}
