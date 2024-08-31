import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOfficesComponent } from '../all-offices/all-offices.component';
import { OfficePageComponent } from '../office-page/office-page.component';

const routes: Routes = [
  {path:'all',component:AllOfficesComponent},
  {path:'office/:id',component:OfficePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficesModuleRoutingModule { }
