import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialoNewEmployeeComponent } from './dialo-new-employee/dialo-new-employee.component';
import { DialogAllSentMessagesComponent } from './dialog-all-sent-messages/dialog-all-sent-messages.component';
import { DialogSendGroupMsgsComponent } from './dialog-send-group-msgs/dialog-send-group-msgs.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-employee-managment',
  templateUrl: './employee-managment.component.html',
  styleUrl: './employee-managment.component.css'
})
export class EmployeeManagmentComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  openDialog() {    
    this.dialog.open(DialoNewEmployeeComponent,{
      height: '600px',
      width: '600px',
    });
  }
  sentAllMsgsDialog() {    
    this.dialog.open(DialogAllSentMessagesComponent,{
      height: '600px',
      width: '600px',
    });
  }
  sendGroupMsg() {
    this.dialog.open(DialogSendGroupMsgsComponent,{
      height: '570px',
      width: '600px',
    });
  }
}
