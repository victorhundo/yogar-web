import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLicaoComponent } from './new-licao/new-licao.component';
import { LicoesService } from './licoes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewLicaoComponent
  ],
  providers: [
    LicoesService
  ]
})
export class LicoesModule { }
