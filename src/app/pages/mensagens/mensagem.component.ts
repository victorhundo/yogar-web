import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  contatos: string[] = ['Aluisio Morais', 'Bruno Soares', 'Carlos Nascimento', 'Daniel Horácio'];

  constructor() { }

  ngOnInit() {
  }

}
