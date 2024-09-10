import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { OfficesModuleRoutingModule } from './offices-module-routing.module';
import { AllOfficesComponent } from '../all-offices/all-offices.component';
import { OfficePageComponent } from '../office-page/office-page.component';
import { WorkplaceComponent } from '../workplace/workplace.component';
import { EmployeeManagmentComponent } from '../employee-managment/employee-managment.component';
import { OfficeManagmentComponent } from '../office-managment/office-managment.component';
import { AttendanceManagmentComponent } from '../attendance-managment/attendance-managment.component';
import { AttendanceSummaryComponent } from '../attendance-summary/attendance-summary.component';
import { DialogNewWorkplaceComponent } from '../workplace/dialog-new-workplace/dialog-new-workplace.component';
import { DialoNewEmployeeComponent } from '../employee-managment/dialo-new-employee/dialo-new-employee.component';

@NgModule({
  declarations: [
    AllOfficesComponent,
    OfficePageComponent,
    WorkplaceComponent,
    EmployeeManagmentComponent,
    OfficeManagmentComponent,
    AttendanceManagmentComponent,
    AttendanceSummaryComponent,
    DialogNewWorkplaceComponent,
    DialoNewEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    OfficesModuleRoutingModule,
  ],
})
export class OfficesModuleModule {}
