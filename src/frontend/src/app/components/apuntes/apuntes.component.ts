import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { Profile } from 'src/app/models/profile';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apuntes',
  templateUrl: './apuntes.component.html',
  styleUrls: ['./apuntes.component.css']
})
export class ApuntesComponent implements OnInit {
  
  profiles: Profile[] = [];
  private profileSubscription: Subscription;

  constructor(private profilesService: ProfileService) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
