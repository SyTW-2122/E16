import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { Profile } from 'src/app/models/profile';
import { Subscription } from 'rxjs';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  
  profile$: Observable<Profile>;
  public username$: Observable<string>;
  public age$: Observable<string>;
  public license$: Observable<string>;
  public description$: Observable<string>;
  private profileSubscription: Subscription;

  constructor(private profilesService: ProfileService) {}

  ngOnInit(): void {
    this.profileSubscription = this.profilesService.getProfiles().subscribe(data => {
      return data;
    });

    this.profile$ = this.profilesService.getProfiles();

    this.username$ = this.profile$.pipe(map(data => {
      return data.username;
    }));

    this.age$ = this.profile$.pipe(map(data => {
      return data.age;
    }));

    this.license$ = this.profile$.pipe(map(data => {
      return data.license;
    }));

    this.description$ = this.profile$.pipe(map(data => {
      return data.description;
    }));
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
