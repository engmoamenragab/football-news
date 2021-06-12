import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  error: string = "";
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  signinForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  submitSigninForm(signinForm: FormGroup) {
    this._AuthService.signin(signinForm.value).subscribe(
      (response) => {
        if (response.message == "success") {
          localStorage.setItem("userToken", response.token);
          this._AuthService.saveCurrentUser();
          this._Router.navigate(["/"]);
        } else {
          this.error = response.message;
        }
      },
      (error) => {},
      () => {},
    );
  }

  ngOnInit(): void {}
}
