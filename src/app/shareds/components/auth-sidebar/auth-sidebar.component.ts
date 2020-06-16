import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../../app.url';
import { AuthURL } from '../../../authentication/authentication.url';
import { IAccount, AccountService, IRoleAccount } from '../../services/account.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { AuthenService } from '../../services/authen.service';
declare let App;
@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements OnInit, IAuthSidebarComponent {
  constructor(
    private acccount: AccountService,
    private authen: AuthenService,
    private alert: AlertService,
    private router: Router
  ) {
    this.initialLoadUserLogin();
  }


  ngOnInit() {
  }

  AppURL = AppURL;
  AuthURL = AuthURL;
  UserLogin: IAccount = {} as any;
  Role = IRoleAccount;

  // โหลดข้อมูล User ที่เข้าสู่ระบบ จาก Token
  public initialLoadUserLogin() {
    if(this.UserLogin._id) {
      console.log("Yeah WTF");
    }else{
    this.acccount
      .getUserLogin(this.authen.getAuthenticated())
      .then(userLogin => {
        this.UserLogin = userLogin;
       setTimeout(() => App.initialLoadPage());
      })
      .catch(err => {
        this.alert.notify(err.Message);
        this.authen.clearAuthenticated();
        this.router.navigate(['/', AppURL.Login]);
      });
    }
  }
}

export interface IAuthSidebarComponent {
  AppURL: any;
  AuthURL: any;
  UserLogin: IAccount;
}