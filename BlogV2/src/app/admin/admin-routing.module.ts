import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../admin/home/home.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: ListUsersComponent
  },
  {
    path: 'users/:id/view',
    component: UsersComponent
  },
  {
    path: 'users/:id/edit',
    component: UsersComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
