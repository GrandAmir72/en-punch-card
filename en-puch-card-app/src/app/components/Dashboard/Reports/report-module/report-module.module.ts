import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportModuleRoutingModule } from './report-module-routing.module';
import { ReportSendTempComponent } from '../report-send-temp/report-send-temp.component';
import { ReportComponent } from '../report/report.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ReportComponent, ReportSendTempComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReportModuleRoutingModule,
  ],
  exports: [ReportSendTempComponent],
})
export class ReportModuleModule {}
