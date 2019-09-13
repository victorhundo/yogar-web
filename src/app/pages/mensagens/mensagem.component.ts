import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  chats: string[] = [];
  chatInput: string;
  chatActivated: string[] = [];
  chatIdActivated: string;
  uuidProfessor: string;
  msg: any;

  constructor(private chatService: ChatService) {
    this.chatService.joinRoom('salasecreta2');
    this.uuidProfessor = JSON.parse(localStorage.getItem('user'))['uuid'];
    var results: Observable<any> = this.chatService.getChatALunos(this.uuidProfessor);
    results.subscribe( res => {
      this.chats = res;
      console.log(this.chats)
      this.chatService.getMessage(this.chatActivated);
    })
  }

  msgs:string[] = [];

  activeChat(id){
    var results: Observable<any> = this.chatService.getMessageSave(id);
    results.subscribe( res => {
      var msgInfo = res[0];
      this.chatActivated = res;
      this.chatIdActivated = msgInfo["uuid"]
      this.chatService.joinRoom(msgInfo["uuid"])
      this.msg = {
        room: msgInfo["uuid"],
        licao: msgInfo["idLicao"],
        professor: this.uuidProfessor,
        aluno:  msgInfo["uuidAluno"],
        remetente: 'professor',
        alunoNome: msgInfo["alunoNome"],
        licaoTitulo: msgInfo["licaoTitulo"],
      }
      this.chatService.getMessage(this.chatActivated);
    })
  }

  sendButtonClick() {
    //console.log(this.msg)
    var now: Date = new Date();
    this.msg["date"] = now;
    this.msg["msg"]  = this.chatInput;
    this.chatService.sendMessage(this.msg);
    this.chatInput = "";
  }

  ngOnInit() {
  }

}
