import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit} from '@angular/core';
import { ChatService } from './chat.service';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';


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
  @ViewChild('scrollMe', {read: ElementRef, static: true}) myScrollContainer: ElementRef;

  ngOnInit() {
    this.scrollToBottom();
  }

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

  scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { console.log(err)}
    }

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
      setTimeout(() => {  this.scrollToBottom(); },10)
    })
  }

  baixo(){
    this.scrollToBottom();
  }

  sendButtonClick() {
    //console.log(this.msg)
    var now: Date = new Date();
    this.msg["date"] = now;
    this.msg["msg"]  = this.chatInput;
    this.chatService.sendMessage(this.msg);
    this.chatInput = "";
  }

}
