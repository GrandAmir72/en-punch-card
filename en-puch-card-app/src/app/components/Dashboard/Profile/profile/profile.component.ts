import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangePasswordComponent } from '../dialog-change-password/dialog-change-password.component';
import { DialogAllOrdersComponent } from '../dialog-all-orders/dialog-all-orders.component';
import { DialogResourcesComponent } from '../dialog-resources/dialog-resources.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  invitations: number | undefined = 0;
  readonly dialog = inject(MatDialog);

  constructor() {}
  changePassword() {
    this.dialog.open(DialogChangePasswordComponent, {
      height: '350px',
      width: '600px',
    });
  }
  showAllOrders(){
    this.dialog.open(DialogAllOrdersComponent, {
      height: '600px',
      width: '900px',
    });
  }
  showResources(){
    this.dialog.open(DialogResourcesComponent, {
      height: '600px',
      width: '900px',
    });
  }
}
