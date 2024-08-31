import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainDashboardComponent } from '../widget-dashboard/main-dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent ,children:[
    {path:'',component:MainDashboardComponent},
    {path:'main',component:MainDashboardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
