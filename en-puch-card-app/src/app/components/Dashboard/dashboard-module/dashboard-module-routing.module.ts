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
      {
        path: 'cartable',
        loadChildren: () =>
          import('../Cartable/cartable-module/cartable.module').then(
            (m) => m.CartableModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../Profile/profile-module/profile-module.module').then(
            (m) => m.ProfileModuleModule
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
