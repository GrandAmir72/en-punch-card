import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from '../attendance/attendance.component';

const routes: Routes = [
  {path:'setAttendance',component:AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceModuleRoutingModule { }
