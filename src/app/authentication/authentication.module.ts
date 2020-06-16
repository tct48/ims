import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedModule } from '../shareds/shareds.module';
import { MemberComponent } from './member/member.component';



@NgModule({
  declarations: [DashboardComponent, MemberComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedModule
  ]
})
export class AuthenticationModule { }
 