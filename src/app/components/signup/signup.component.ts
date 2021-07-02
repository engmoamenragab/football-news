import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  error: string = "";
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  ngOnInit(): void {}
  signupForm = new FormGroup({
    first_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    last_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.pattern("^[A-Z][a-z0-9]{3,8}$"), Validators.required]),
    age: new FormControl(null, [Validators.min(16), Validators.max(80), Validators.required]),
  });
  submitSignupForm(signupForm: FormGroup) {
    this._AuthService.signup(signupForm.value).subscribe(
      (response) => {
        if (response.message == "success") {
          this._Router.navigate(["/signin"]);
        } else {
          this.error = response.errors.email.message;
        }
      },
      (error) => {},
      () => {},
    );
  }
}
