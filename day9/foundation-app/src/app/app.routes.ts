import { Routes } from '@angular/router';
import { Login } from './basics/login/login';
import { Reactivedform } from './basics/reactivedform/reactivedform';
import { Templateform } from './basics/templateform/templateform';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'dash',component:Reactivedform,canActivate:[authGuard]},
    {path:'temp',component:Templateform,canActivate:[authGuard]},
    {path:'',redirectTo:'login',pathMatch:'full'}
];
