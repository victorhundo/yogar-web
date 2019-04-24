import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfessorComponent } from './view-professor/view-professor.component';
import { RegisterProfessorComponent } from './register-professor/register-professor.component';
import { ListProfessorComponent } from './list-professor/list-professor.component';
import { ProfessorService } from './professor-service.service';
import { FormsModule } from '@angular/forms';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';

@NgModule({
  declarations: [ViewProfessorComponent, RegisterProfessorComponent, ListProfessorComponent, UpdateProfessorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewProfessorComponent,
    ListProfessorComponent,
    RegisterProfessorComponent,
    UpdateProfessorComponent
  ],
  providers: [ProfessorService]
})
export class ProfessorModule { }
