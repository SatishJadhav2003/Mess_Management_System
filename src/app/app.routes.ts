import { Routes } from '@angular/router';
import { HomeComponent } from './Startup/home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    loadChildren: ()=> import('./User/user.module').then((m)=>m.UserModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
