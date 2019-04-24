import { ProfessorService } from './../professor-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor, ProfessorDto } from 'src/app/models/professor.model';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.css']
})
export class ListProfessorComponent implements OnInit {

  professores: ProfessorDto[] = [];

  // flags para deleção
  deleteModalFlag = false;
  deleteUuid: number;

  constructor(private router: Router,
              private professorService: ProfessorService) { }

  ngOnInit() {
    this.professorService.getAll().subscribe(resp => {
      this.professores = resp;
    });
  }

  routerTo(rota: string, parans: number) {
    this.router.navigate([rota , { id: parans}]);
  }

  deleteModalFlagF(uuid: number) {
    this.deleteUuid = uuid;
    this.deleteModalFlag = !this.deleteModalFlag;
  }

  delete() {
    console.log(this.deleteUuid);
    this.professorService.delete(this.deleteUuid).subscribe(resp =>{
      console.log(resp);
      this.deleteModalFlagF(undefined);
      this.ngOnInit();
    });
  }

}
