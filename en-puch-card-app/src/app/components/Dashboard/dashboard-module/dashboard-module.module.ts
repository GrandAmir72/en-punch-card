import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainDashboardComponent } from '../widget-dashboard/main-dashboard.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { SharedModuleModule } from '../../Shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    DashboardComponent,
    MainDashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    SharedModuleModule
    
  ]
})
export class DashboardModuleModule { }
