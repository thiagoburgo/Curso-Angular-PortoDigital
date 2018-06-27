import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LayoutSimplesComponent } from './layout-simples/layout-simples.component';

const routes: Routes = [
  {
     path: 'account',
     component: LayoutSimplesComponent,
     loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
 },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
