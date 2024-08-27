import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainDashboardComponent } from '../main-dashboard/main-dashboard.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainDashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
  ]
})
export class DashboardModuleModule { }
