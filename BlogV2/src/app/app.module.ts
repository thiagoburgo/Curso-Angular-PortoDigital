import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { IndexComponent } from './index/index.component';
import { MatCardModule, MatCardSubtitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutSimplesComponent } from './layout-simples/layout-simples.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LayoutSimplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
