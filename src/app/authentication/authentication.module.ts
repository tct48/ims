import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shareds/shareds.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedModule
  ]
})
export class AuthenticationModule { }
