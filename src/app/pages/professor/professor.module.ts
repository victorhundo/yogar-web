import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfessorComponent } from './view-professor/view-professor.component';
import { RegisterProfessorComponent } from './register-professor/register-professor.component';
import { ListProfessorComponent } from './list-professor/list-professor.component';
import { ProfessorService } from './professor-service.service';
import { FormsModule } from '@angular/forms';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ViewProfessorComponent, RegisterProfessorComponent, ListProfessorComponent, UpdateProfessorComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    ViewProfessorComponent,
    ListProfessorComponent,
    RegisterProfessorComponent,
    UpdateProfessorComponent,
  ],
  providers: [ProfessorService]
})
export class ProfessorModule { }
