import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './member/member.component';
import { CreateMemberComponent } from './member/create-member/create-member.component';
import { ProfileComponent } from './profile/profile.component';

const RouteLists: Routes = [
  { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
  { path: AuthURL.Dashboard, component: DashboardComponent },
  { path: AuthURL.Member, component: MemberComponent },
  { path: AuthURL.CreateMember, component: CreateMemberComponent },
  { path: AuthURL.Profile, component:ProfileComponent}
];

export const AuthenticationRouting = RouterModule.forChild(RouteLists);
