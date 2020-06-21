import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './member/member.component';
import { CreateMemberComponent } from './member/create-member/create-member.component';
import { ProfileComponent } from './profile/profile.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ObserveComponent } from './observe/observe.component';
import { CreateObserveComponent } from './observe/create-observe/create-observe.component';
import { MeetingComponent } from './meeting/meeting.component';
import { ViewTeachingComponent } from './teaching/view-teaching/view-teaching.component';

const RouteLists: Routes = [
  { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
  { path: AuthURL.Dashboard, component: DashboardComponent },
  { path: AuthURL.Member, component: MemberComponent },
  { path: AuthURL.CreateMember, component: CreateMemberComponent },
  { path: AuthURL.Profile, component:ProfileComponent},
  { path: AuthURL.Research, component:ResearchComponent },
  { path: AuthURL.Teaching, component: TeachingComponent },
  { path: AuthURL.Observe, component: ObserveComponent },
  { path: AuthURL.ObserveCreate, component: CreateObserveComponent },
  { path: AuthURL.Meeting, component: MeetingComponent },
  { path: AuthURL.TeachingView, component: ViewTeachingComponent }
];

export const AuthenticationRouting = RouterModule.forChild(RouteLists);
