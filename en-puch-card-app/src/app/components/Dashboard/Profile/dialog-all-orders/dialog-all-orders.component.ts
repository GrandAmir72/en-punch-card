import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  plane: string;
  dateOfOrder: string;
  status: string;
  detail: string;
  pay: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, plane: 'Pro',dateOfOrder:'2021/01/01',status:'1',detail:'1',pay:'1'},
  {position: 2, plane: 'Basic',dateOfOrder:'2021/10/02',status:'1',detail:'1',pay:'1'},
  {position: 3, plane: 'Basic',dateOfOrder:'2021/10/02',status:'1',detail:'1',pay:'1'},
  {position: 4, plane: 'Basic',dateOfOrder:'2021/10/02',status:'1',detail:'1',pay:'1'},
  {position: 5, plane: 'Basic',dateOfOrder:'2021/10/02',status:'1',detail:'1',pay:'1'},
  {position: 6, plane: 'Basic',dateOfOrder:'2021/10/02',status:'1',detail:'1',pay:'1'},
  {position: 7, plane: 'Basic',dateOfOrder:'2021/10/02',status:'1',detail:'1',pay:'1'},
  {position: 8, plane: 'Basic',dateOfOrder:'2021/10/02',status:'1',detail:'1',pay:'1'},
];
@Component({
    selector: 'app-dialog-all-orders',
    templateUrl: './dialog-all-orders.component.html',
    styleUrl: './dialog-all-orders.component.css',
    standalone: false
})
export class DialogAllOrdersComponent {
  displayedColumns: string[] = ['position', 'plane', 'dateOfOrder', 'status','detail','pay'];
  dataSource = ELEMENT_DATA;
}
