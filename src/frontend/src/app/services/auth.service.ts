import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = "http://localhost:4000/api/auth"
  static getToken: any;

  constructor(private http: HttpClient, private router:Router) { }

  signUp(user: any) {

    return this.http.post<any>(this.URL + "/signup", user)

  }

  signIn(user: any) {

    return this.http.post<any>(this.URL + "/signin", user)

  }

  loggedIn() {

    if (localStorage.getItem("token")) {
      return true
    }

    return false

  }

  getToken() {

    return localStorage.getItem("token")

  }

  logOut() {

    localStorage.removeItem("token")
    this.router.navigate(["/signin"])

  }
}
