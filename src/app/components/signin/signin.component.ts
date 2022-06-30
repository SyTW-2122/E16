import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  user = {
    email: "",
    password: ""
  }

  ngOnInit(): void { }

  signIn() {
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("username", res.username);
        this.router.navigate(["/main"])
      },
      err => console.log(err)
    )
  }

}