import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PermissionGuard implements CanActivate, CanActivateChild, CanLoad {



  constructor(private router: Router/*,
  private accountService: any*/) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasPermission(next.data);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  private hasPermission(permissionData: any): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Next: ', permissionData);
    const permissions: string[] = permissionData.permissions;
    const requireAll: boolean = permissionData.requireAll;
    let hasPermission = false;

    if (requireAll) {
      hasPermission = permissions.every((perm, idx, arr) => perm.indexOf('Admin') > -1);
    } else {
      hasPermission = permissions.some((perm, idx, arr) => perm.indexOf('Admin') > -1);
    }

    console.log('HasPermission', hasPermission);

    // const hasPermissionObs = accountService.checkPermissions();
    return hasPermission;


  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('route.data: ', route.data);
    const permission = this.hasPermission(route.data);
    console.log('canLoad: ', permission);
    return permission;
  }
}
