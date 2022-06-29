import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*
    const path = require('path');
    const http = require('http');
    const express = require('express');
    const { Server } = require('socket.io');
    const { Socket } = require('dgram');
    const { isNullOrUndefined } = require('util');

    const app = express();
    const server = http.createServer(app);
    const io = new Server(server);

    io.on('connection', (socket: { on: (arg0: string, arg1: (msg: any) => void) => void; })=> {
      socket.on('chat', (msg: any) => {
        io.emit('chat', `Hugo: ${msg}`);
      });
    });

    app.set('port', process.env.PORT || 3000)
    app.get('/', (req: any, res: { sendFile: (arg0: any) => void; }) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });

    server.listen(app.get('port'), () => {
      console.log(`Server up on port ${app.get('port')}!`);
    });
    */
  }
}