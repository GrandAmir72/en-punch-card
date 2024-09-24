import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewWorkplaceComponent } from './dialog-new-workplace/dialog-new-workplace.component';
import { DialogEditWorkplaceComponent } from './dialog-edit-workplace/dialog-edit-workplace.component';
export interface PeriodicElement {
  name: string;
  position: number;
  type: string;
  setting: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', type: 's', setting:'x'},
];
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrl: './workplace.component.css'
})
export class WorkplaceComponent {
  displayedColumns: string[] = ['position', 'name', 'type', 'setting'];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);

  addNewWorkplaceDialog() {    
    this.dialog.open(DialogNewWorkplaceComponent,{
      height: '400px',
      width: '600px',
    });
  }
  editWorkplaceDialog(id:string) {    
    this.dialog.open(DialogEditWorkplaceComponent,{
      height: '400px',
      width: '600px',
      data:{
        workplaceId:id,
      }
    });
  }
}
