import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { OfficesModuleRoutingModule } from './offices-module-routing.module';
import { AllOfficesComponent } from '../all-offices/all-offices.component';
import { OfficePageComponent } from '../office-page/office-page.component';
import { WorkplaceComponent } from '../workplace/workplace.component';
import { EmployeeManagmentComponent } from '../employee-managment/employee-managment.component';
import { OfficeManagmentComponent } from '../office-managment/office-managment.component';
import { AttendanceManagmentComponent } from '../attendance-managment/attendance-managment.component';
import { AttendanceSummaryComponent } from '../attendance-summary/attendance-summary.component';

@NgModule({
  declarations: [
    AllOfficesComponent,
    OfficePageComponent,
    WorkplaceComponent,
    EmployeeManagmentComponent,
    OfficeManagmentComponent,
    AttendanceManagmentComponent,
    AttendanceSummaryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    OfficesModuleRoutingModule,
  ],
})
export class OfficesModuleModule {}
