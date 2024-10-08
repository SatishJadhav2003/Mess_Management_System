import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { RouterModule, Routes } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { UserSidemenuComponent } from "./user-sidemenu/user-sidemenu.component";
import { NgApexchartsModule } from 'ng-apexcharts';

const route:Routes = [
  {
    path:'',
    component:UserComponent
  }
]

@NgModule({
  declarations: [UserComponent,UserHeaderComponent,UserSidemenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatBadgeModule,
    NgApexchartsModule
]
})
export class UserModule { }
