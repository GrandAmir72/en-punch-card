import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceModuleRoutingModule } from './attendance-module-routing.module';
import { AttendanceComponent } from '../attendance/attendance.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AttendanceComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    AttendanceModuleRoutingModule,
  ],
})
export class AttendanceModuleModule {}
