import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router : Router) { }

  user = {
    username: "",
    email: "",
    password: "",
  }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/apuntes"]);
      },
      err => console.log(err)

    )
  }

}
