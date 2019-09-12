import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  contatos: string[] = ['Aluisio Morais', 'Bruno Soares', 'Carlos Nascimento', 'Daniel Horácio'];
  chatInput: string;

  constructor(private chatService: ChatService) {
    this.chatService.joinRoom('salasecreta2')
    this.chatService.getMessage(this.msgs)
  }

  msgs:string[] = [];

  sendButtonClick() {
    //console.log(this.msg)
    var msg = {
      room: 'salasecreta2',
      msg: this.chatInput,
    }
    this.chatService.sendMessage(msg);
    this.chatInput = "";
  }

  ngOnInit() {
  }

}
