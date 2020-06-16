import { Routes, RouterModule } from "@angular/router";
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthenticationModule } from './authentication/authentication.module';

const RouterLists: Routes = [
    { path: '', redirectTo: AppURL.Login,pathMatch:'full' },
    { path: AppURL.Login, component: LoginComponent },
    {
        // path:AppURL.Authen, loadChildren:()=> import ('./authentication/authentication.module').then(m=>{m.AuthenticationModule}),
        path:AppURL.Authen, loadChildren:()=> AuthenticationModule
        // path:AppURL.Authen, loadChildren:()=> import ('./authentication/authentication.module').then(m=>{m.AuthenticationModule}).catch( err => console.log('Oh no!')),
        // canActivate:[AuthenticationGuard] import('./customers/customers.module').then(m => m.CustomersModule)
    }
];

export const AppRouting = RouterModule.forRoot(RouterLists);