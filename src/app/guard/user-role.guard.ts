import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IRoleAccount, AccountService } from '../shareds/services/account.service';
import { AlertService } from '../shareds/services/alert.service';
import { AuthenService } from '../shareds/services/authen.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  constructor(
    private authen: AuthenService,
    private account: AccountService,
    private alert: AlertService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const ss: IRoleAccount[] = next.data.roles;
    return new Promise<boolean>((resolve, reject) => {
      const roles: IRoleAccount[] = next.data.roles;
      this.account
        .getUserLogin(this.authen.getAuthenticated())
        .then(userLogin => {
          if (roles.filter(item => item == userLogin.role).length > 0)
            resolve(true);
          else {
            this.alert.notify('คุณไม่มีสิทธิ์ในการเข้าถึง URL ดังกล่าว !', 'danger');
            resolve(false);
          }
        })
        .catch(() => resolve(false));
    });
    const roles: IRoleAccount[] = next.data.roles;
  }

}
