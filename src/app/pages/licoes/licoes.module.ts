import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLicaoComponent } from './new-licao/new-licao.component';
import { LicoesService } from './licoes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarLicoesComponent } from './listar-licoes/listar-licoes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewLicaoComponent,
    ListarLicoesComponent
  ],
  providers: [
    LicoesService
  ]
})
export class LicoesModule { }
