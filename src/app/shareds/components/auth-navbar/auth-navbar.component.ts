import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../../app.url';
import { AuthURL } from '../../../authentication/authentication.url';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AuthenService } from '../../services/authen.service';
import { AccountService } from '../../services/account.service';

@Component({
    selector: 'app-auth-navbar',
    templateUrl: './auth-navbar.component.html',
    styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {
    constructor(
        private router: Router,
        private authen: AuthenService,
        private alert: AlertService,
        private account:AccountService
    ) { }

    ngOnInit() {
    }

    AppURL = AppURL;
    AuthURL = AuthURL;

    // ออกจากระบบ
    onLogout() {
        this.alert.notify('ออกจากระบบสำเร็จ', 'info');
        this.authen.clearAuthenticated();
        this.router.navigate(['/', AppURL.Login]);
    }

    onProfile(){
        this.router.navigate(['',
        AppURL.Authen,
        AuthURL.CreateMember
      ], { queryParams: { id: this.account.UserLogin._id } });
    }
}
