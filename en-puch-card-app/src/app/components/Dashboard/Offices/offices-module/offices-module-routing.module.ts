import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOfficesComponent } from '../all-offices/all-offices.component';
import { OfficePageComponent } from '../office-page/office-page.component';
import { WorkplaceComponent } from '../workplace/workplace.component';
import { EmployeeManagmentComponent } from '../employee-managment/employee-managment.component';
import { OfficeManagmentComponent } from '../office-managment/office-managment.component';
import { AttendanceManagmentComponent } from '../attendance-managment/attendance-managment.component';
import { AttendanceSummaryComponent } from '../attendance-summary/attendance-summary.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllOfficesComponent,
    data: { breadcrumb: 'offices' },
  },
  {
    path: 'office/:id',
    component: OfficePageComponent,
    data: { breadcrumb: 'office' },
  },
  { path: 'workplaces', component: WorkplaceComponent },
  { path: 'employee', component: EmployeeManagmentComponent },
  { path: 'setting', component: OfficeManagmentComponent },
  { path: 'attendance-managment', component: AttendanceManagmentComponent },
  { path: 'attendance-summary', component: AttendanceSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficesModuleRoutingModule {}
