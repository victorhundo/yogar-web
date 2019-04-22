import { PagesModule } from './../pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    PagesModule
  ],
  exports :[ HomeComponent]
})
export class LayoutModule { }
