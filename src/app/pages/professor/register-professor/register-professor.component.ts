import { ProfessorService } from './../professor-service.service';
import { Component, OnInit } from '@angular/core';
import { Professor, ProfessorDto, ProfessorRegisterDto } from '../../../models/professor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-professor',
  templateUrl: './register-professor.component.html',
  styleUrls: ['./register-professor.component.css']
})
export class RegisterProfessorComponent implements OnInit {

  professor: ProfessorRegisterDto = new ProfessorRegisterDto();
  senha2 = null;

  constructor(private profService: ProfessorService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    
    this.profService.register(this.professor).subscribe(resp =>{
      console.log(resp);
      // this.professor.nome.primeiro = resp.primeiroNome;
      // this.professor.nome.ultimo = resp.ultimoNome;
      // this.professor.endereco.cep = resp.cep;
      // this.professor.endereco.cidade = resp.cidade;
      // this.professor.endereco.estado = resp.estado;
      this.router.navigate(['list/professor']);
    });
  }

}
