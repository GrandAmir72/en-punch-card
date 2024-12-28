import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddMissionComponent } from './dialog-add-mission/dialog-add-mission.component';
import { DialogAddLeaveComponent } from './dialog-add-leave/dialog-add-leave.component';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrl: './main-dashboard.component.css',
    standalone: false
})
export class MainDashboardComponent {
  readonly dialog = inject(MatDialog);

  constructor(){}


  addMissionDialog(){
    this.dialog.open(DialogAddMissionComponent,{
      width:'600px',
      height:'600px'
    })
  }
  addLeaveDialog(){
    this.dialog.open(DialogAddLeaveComponent,{
      width:'600px',
      height:'600px'
    })
  }


}
