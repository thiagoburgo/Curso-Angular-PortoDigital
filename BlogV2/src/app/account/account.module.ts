import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountMasterComponent } from './account-master/account-master.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent, AccountMasterComponent, RedefinirSenhaComponent, LogoutComponent]
})
export class AccountModule { }
