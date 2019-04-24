import { RouterTestingModule } from '@angular/router/testing';
import { ProfessorService } from './../professor-service.service';
import { Component, OnInit } from '@angular/core';
import { ProfessorDto } from 'src/app/models/professor.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-professor',
  templateUrl: './view-professor.component.html',
  styleUrls: ['./view-professor.component.css']
})
export class ViewProfessorComponent implements OnInit {

  professor: ProfessorDto = new ProfessorDto();

   // flags para deleção
   deleteModalFlag = false;

  constructor(private professorService: ProfessorService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.activeRouter.snapshot.params.id);
    this.professor.uuid = this.activeRouter.snapshot.params.id;
    this.professorService.get(this.professor.uuid).subscribe(resp => {
      this.professor = resp[0];
      console.log(resp);
    });
  }

  deleteModalFlagF() {
    this.deleteModalFlag = !this.deleteModalFlag;
  }

  delete() {
    console.log(this.professor.uuid);
    this.professorService.delete(this.professor.uuid).subscribe(resp =>{
      console.log(resp);
      this.deleteModalFlagF();
      this.router.navigate(['/list/professor']);
    });
  }

}
