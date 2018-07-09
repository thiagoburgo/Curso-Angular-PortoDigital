import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PermissionGuard } from './shared/permission.guard';


const routes: Routes = [
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'admin',
        canActivate: [PermissionGuard],
        canLoad: [PermissionGuard],
        data: {
          permissions: ['Admin', 'Sys'],
          requireAll: true
        },
        loadChildren: 'app/admin/admin.module#AdminModule'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/not-found'
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
