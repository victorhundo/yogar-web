import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { API } from './../../API';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private socket: SocketIOClient.Socket;
  private socket: any;

  constructor() {
    this.socket = io(`${API}`);
  }

  // EMITTER
  sendMessage(msg: object) {
    this.socket.emit('sendMessage', msg);
  }

  getMessage(msgs: string[]){
    this.socket.on('sendMessage', (data) =>{
      msgs.push(data);
    })
  }
}
