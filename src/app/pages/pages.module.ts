import { ProfessorModule } from './professor/professor.module';
import { AuthService } from './login/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfessorModule,
    HttpClientModule
  ],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class PagesModule { }
