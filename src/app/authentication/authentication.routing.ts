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
import { UserRoleGuard } from '../guard/user-role.guard';
import { IRoleAccount } from '../shareds/services/account.service';

const RouteLists: Routes = [
  { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
  { path: AuthURL.Dashboard, component: DashboardComponent },
  { path: AuthURL.Member, component: MemberComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.ครูอาจารย์, IRoleAccount.ผู้ดูแลระบบ] } },
  { path: AuthURL.CreateMember, component: CreateMemberComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.ครูอาจารย์, IRoleAccount.ผู้ดูแลระบบ] } },
  { path: AuthURL.Profile, component: ProfileComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.นักศึกษา] } },
  { path: AuthURL.Research, component: ResearchComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.ครูอาจารย์, IRoleAccount.นักศึกษา] } },
  { path: AuthURL.Teaching, component: TeachingComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.ครูอาจารย์, IRoleAccount.นักศึกษา] }  },
  { path: AuthURL.Observe, component: ObserveComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.ครูอาจารย์, IRoleAccount.นักศึกษา] }  },
  { path: AuthURL.ObserveCreate, component: CreateObserveComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.นักศึกษา] }  },
  { path: AuthURL.Meeting, component: MeetingComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.ครูอาจารย์, IRoleAccount.นักศึกษา] }  },
  { path: AuthURL.TeachingView, component: ViewTeachingComponent, canActivate: [UserRoleGuard], data: { roles:[IRoleAccount.ครูอาจารย์, IRoleAccount.นักศึกษา] }  },
];

export const AuthenticationRouting = RouterModule.forChild(RouteLists);
