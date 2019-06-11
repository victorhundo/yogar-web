import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor-service.service';
import { Router } from '@angular/router';
import { ProfessorRegisterDto } from 'src/app/models/professor.model';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.css']
})
export class UpdateProfessorComponent implements OnInit {

  professor: ProfessorRegisterDto = new ProfessorRegisterDto();
  senha2 = null;

  constructor(private profService: ProfessorService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.authService.user);
    
    this.professor = this.authService.user;
  }

  update() {
    this.professor.login.username = this.professor.nome.primeiro;
    this.profService.register(this.professor).subscribe(resp => {
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
