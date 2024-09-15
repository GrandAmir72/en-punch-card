import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddShiftComponent } from '../dialog-add-shift/dialog-add-shift.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];
@Component({
  selector: 'app-special-attendance-setting',
  templateUrl: './special-attendance-setting.component.html',
  styleUrl: './special-attendance-setting.component.css'
})
export class SpecialAttendanceSettingComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);

  openDialog() {    
    this.dialog.open(DialogAddShiftComponent,{
      height: '200px',
      width: '600px',
    });

  }
}
