import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";

import { Router } from "@angular/router";

import { Profile } from "../../app/models/profile";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private profileArray: Profile[] = [];
  private profile: Profile;
  private profiles$ = new Subject<Profile[]>();
  // readonly url = "https://backend-tenerifebriefing.herokuapp.com";
  url = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  getProfiles() {
    return this.http
      .get<Profile>(this.url + "/perfil")
      .pipe(
        map((profileData) => {
          // IMPRIME LAS VARIABLES DEL OBJETO
          console.log("ProfileData.username: " + profileData.username);
          return profileData
        })
      );
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }

  addProfile(profile: Profile) {
    this.http
      .post<{ profile: Profile }>(this.url + "/perfil", profile)
      .subscribe((profile) => {
        this.profileArray.push(profile.profile);
        this.profiles$.next(this.profileArray);
      });
    this.router.navigate(["/perfil"]);
  }

  updateProfile(profile: Profile) {
    this.http
      .patch<{ profile: Profile }>(this.url + "/perfil", profile)
      .subscribe((profile) => {
        this.profileArray.push(profile.profile);
        this.profiles$.next(this.profileArray);
      });
    this.router.navigate(["/perfil"]);
  }
}