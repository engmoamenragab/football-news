import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
declare let $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isSignin: boolean = false;
  constructor(private _AuthService: AuthService) {}
  ngOnInit(): void {
    this._AuthService.currentUser.subscribe(() => {
      if (this._AuthService.currentUser.getValue() != null) {
        this.isSignin = true;
      } else {
        this.isSignin = false;
      }
    });
    //ANCHOR sticky nav
    $(window).scroll(function () {
      if ($(window).scrollTop() > 20) {
        $("#nav").addClass("bg-white");
        $("#nav a").addClass("text-primary");
        $("#nav .navbar-toggler .navbar__toggler__icon").addClass("bg-primary");
      } else {
        $("#nav").removeClass("bg-white");
        $("#nav a").removeClass("text-primary");
        $("#nav .navbar-toggler .navbar__toggler__icon").removeClass("bg-primary");
      }
    });
    //ANCHOR navbar toggler
    $(".navbar-toggler").click(function () {
      if ($(window).scrollTop() <= 20) {
        if ($("#nav").attr("class").indexOf("bg-white") == -1) {
          $("#nav").addClass("bg-white");
          $("#nav a").addClass("text-primary");
          $("#nav .navbar-toggler .navbar__toggler__icon").addClass("bg-primary");
        } else {
          $("#nav").removeClass("bg-white");
          $("#nav a").removeClass("text-primary");
          $("#nav .navbar-toggler .navbar__toggler__icon").removeClass("bg-primary");
        }
      }
    });
  }
  isSignout() {
    this._AuthService.signout();
  }
}
