import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountMasterComponent } from './account-master/account-master.component';

const routes: Routes = [
  {
    path: '',
    component: AccountMasterComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
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
