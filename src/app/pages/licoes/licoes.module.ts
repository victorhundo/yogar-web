import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLicaoComponent } from './new-licao/new-licao.component';
import { LicoesService } from './licoes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarLicoesComponent } from './listar-licoes/listar-licoes.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatSliderModule} from '@angular/material/slider';
import { MatVideoModule } from 'mat-video';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatSliderModule,
    MatVideoModule
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
