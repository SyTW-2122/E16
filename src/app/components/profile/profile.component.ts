import { Component, OnInit } from '@angular/core';


import { AuthService } from "../../services/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Profile } from "../../models/profile";
import { Subject } from "rxjs";


import { ProfileService } from "../../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, 
      private profileService: ProfileService) { }

  ngOnInit(): void { }

  getProfiles() { }
}
