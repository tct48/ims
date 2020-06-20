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
import { ObserveComponent } from './observe/observe.component';
import { CreateObserveComponent } from './observe/create-observe/create-observe.component';
import { MeetingComponent } from './meeting/meeting.component';
import { DateAgoPipe } from '../pipes/date-ago.pipe';

@NgModule({
  declarations: [DashboardComponent, MemberComponent, CreateMemberComponent, ProfileComponent, ResearchComponent, TeachingComponent, ObserveComponent, CreateObserveComponent, MeetingComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedModule,
  ]
})
export class AuthenticationModule { }
 