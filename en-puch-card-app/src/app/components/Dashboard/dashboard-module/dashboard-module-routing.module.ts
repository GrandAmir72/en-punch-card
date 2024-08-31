import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainDashboardComponent } from '../widget-dashboard/main-dashboard.component';
import { AllOfficesComponent } from '../Offices/all-offices/all-offices.component';
import { OfficePageComponent } from '../Offices/office-page/office-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'main', component: MainDashboardComponent },
      { path: 'offices', children: [
        {path:'all',component:AllOfficesComponent},
        {path:'office/:id',component:OfficePageComponent},
      ] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModuleRoutingModule {}
