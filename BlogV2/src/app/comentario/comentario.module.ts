import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioRoutingModule } from './comentario-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ComentarioRoutingModule
  ],
  declarations: [HomeComponent]
})
export class ComentarioModule { }
