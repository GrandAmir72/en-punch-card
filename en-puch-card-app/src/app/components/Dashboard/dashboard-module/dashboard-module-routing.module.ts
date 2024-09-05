import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainDashboardComponent } from '../widget-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'main', component: MainDashboardComponent },
      {
        path: 'offices',
        loadChildren: () =>
          import('../Offices/offices-module/offices-module.module').then(
            (m) => m.OfficesModuleModule
          ),
      },
      {
        path: 'attendance',
        loadChildren: () =>
          import('../Attendance/attendance-module/attendance-module.module').then(
            (m) => m.AttendanceModuleModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../Reports/report-module/report-module.module').then(
            (m) => m.ReportModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModuleRoutingModule {}
