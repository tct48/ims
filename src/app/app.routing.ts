import { Routes, RouterModule } from "@angular/router";
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthenticationModule } from './authentication/authentication.module';
import { RegisterComponent } from './components/register/register.component';

const RouterLists: Routes = [
    { path: '', redirectTo: AppURL.Login,pathMatch:'full' },
    { path: AppURL.Login, component: LoginComponent },
    { path: AppURL.Register, component: RegisterComponent },
    {
        // path:AppURL.Authen, loadChildren:()=> import ('./authentication/authentication.module').then(m=>{m.AuthenticationModule}),
        path:AppURL.Authen, loadChildren:()=> AuthenticationModule,
        // canActivate:[AuthenticationGuard]
        // path:AppURL.Authen, loadChildren:()=> import ('./authentication/authentication.module').then(m=>{m.AuthenticationModule}).catch( err => console.log('Oh no!')),
        // canActivate:[AuthenticationGuard] import('./customers/customers.module').then(m => m.CustomersModule)
        
    }
];

export const AppRouting = RouterModule.forRoot(RouterLists);