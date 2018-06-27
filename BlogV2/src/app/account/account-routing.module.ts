import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountMasterComponent } from './account-master/account-master.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: AccountMasterComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
  {
    path: 'redefinir-senha',
    component: LayoutComponent,
    children: [{
      path: '',
      component: RedefinirSenhaComponent
    },
    {
      path: 'sucesso',
      component: RedefinirSenhaComponent
    }]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
