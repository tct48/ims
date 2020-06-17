import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedModule } from '../shareds/shareds.module';
import { MemberComponent } from './member/member.component';
import { CreateMemberComponent } from './member/create-member/create-member.component';
import { ProfileComponent } from './profile/profile.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';

@NgModule({
  declarations: [DashboardComponent, MemberComponent, CreateMemberComponent, ProfileComponent, ResearchComponent, TeachingComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedModule,
  ]
})
export class AuthenticationModule { }
 