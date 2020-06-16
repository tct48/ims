import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './member/member.component';

const RouteLists: Routes = [
  { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
  { path: AuthURL.Dashboard, component: DashboardComponent },
  { path: AuthURL.Member, component: MemberComponent }
];

export const AuthenticationRouting = RouterModule.forChild(RouteLists);
