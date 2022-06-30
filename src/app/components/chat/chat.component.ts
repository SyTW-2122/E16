import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from "../../services/profile.service";
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import Pusher from 'pusher-js';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  profile$: Observable<Profile>;
  public username$: Observable<string>;
  username: "Username";
  message = '';
  messages: any = [];

  constructor(private http: HttpClient, private profilesService: ProfileService) {
    const input = document.getElementById('first_name');

    input?.addEventListener('input', event => {
      const target = event.target as HTMLInputElement;
    });
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    this.profile$ = this.profilesService.getProfiles();
    this.username$ = this.profile$.pipe(map(data => {
      return data.username;
    }));

    const pusher = new Pusher('eb594a2c51469a6cc11d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      this.messages.push(data);
    });
  }

  submit(): void {
    this.http.post('http://localhost:3000/src/api/components/chat/messages',  {
      username: this.username,
      message: this.message,
    }).subscribe( () => {
      this.message = "";
    });
  }
}