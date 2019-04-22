import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfessorComponent } from './view-professor/view-professor.component';
import { RegisterProfessorComponent } from './register-professor/register-professor.component';
import { ListProfessorComponent } from './list-professor/list-professor.component';
import { ProfessorService } from './professor-service.service';

@NgModule({
  declarations: [ViewProfessorComponent, RegisterProfessorComponent, ListProfessorComponent],
  imports: [
    CommonModule
  ],
  exports: [ 
    ViewProfessorComponent,
    ListProfessorComponent,
    RegisterProfessorComponent
  ],
  providers: [ProfessorService]
})
export class ProfessorModule { }
