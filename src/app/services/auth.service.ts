import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private URL = "https://backend-tenerifebriefing.herokuapp.com"
  URL = "https://backend-of-sytw.herokuapp.com";
  static getToken: any;

  constructor(private http: HttpClient, private router:Router) { }

  signUp(user: any) {
    return this.http.post<any>(this.URL + "/registro", user)
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL + "/login", user)
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
    this.router.navigate(["/registro"])
  }

  getUsername() {
    return localStorage.getItem("username");
  }
}
