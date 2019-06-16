import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor-service.service';
import { Router } from '@angular/router';
import { ProfessorRegisterDto, ProfessorDto } from 'src/app/models/professor.model';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.css']
})
export class UpdateProfessorComponent implements OnInit {

  professor: ProfessorDto = new ProfessorDto();
  senha2 = null;

  constructor(private profService: ProfessorService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.authService.user);

    this.professor = this.authService.user;
  }

  update() {

// tslint:disable-next-line: forin
    for (const val in this.professor) {
      console.log(val);
      let value = {
        '"campo"': val,
        '"valor"': this.professor[val]
      };
      console.log(value);
      this.profService.update(this.authService.getId(),value).subscribe(
        result => {
          // this.post = result;
          console.log(result);
        },
        error => {
          console.log('Não foi possível atualizar', error);
        }
      );
    };
  }

}
