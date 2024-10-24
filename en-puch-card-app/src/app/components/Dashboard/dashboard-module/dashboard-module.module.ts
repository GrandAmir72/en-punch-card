import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainDashboardComponent } from '../widget-dashboard/main-dashboard.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SharedModuleModule } from '../../Shared/shared-module/shared-module.module';
import { OfficesModuleModule } from '../Offices/offices-module/offices-module.module';
import { AttendanceModuleModule } from '../Attendance/attendance-module/attendance-module.module';
import { ReportModuleModule } from '../Reports/report-module/report-module.module';
import { CartableModule } from '../Cartable/cartable-module/cartable.module';
import { ProfileModuleModule } from '../Profile/profile-module/profile-module.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { DialogAddLeaveComponent } from '../widget-dashboard/dialog-add-leave/dialog-add-leave.component';
import { DialogAddMissionComponent } from '../widget-dashboard/dialog-add-mission/dialog-add-mission.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    DashboardComponent,
    MainDashboardComponent,
    NavbarComponent,
    DialogAddLeaveComponent,
    DialogAddMissionComponent,
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatSelectModule,
    SharedModuleModule,
    AttendanceModuleModule,
    ReportModuleModule,
    CartableModule,
    MatDialogModule,
    ProfileModuleModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatRadioModule,
    OfficesModuleModule,
  ],
})
export class DashboardModuleModule {}
