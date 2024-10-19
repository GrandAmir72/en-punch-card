import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DialogChangePasswordComponent } from '../dialog-change-password/dialog-change-password.component';
import { DialogAllOrdersComponent } from '../dialog-all-orders/dialog-all-orders.component';
import { DialogResourcesComponent } from '../dialog-resources/dialog-resources.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DialogChangePasswordComponent,
    DialogAllOrdersComponent,
    DialogResourcesComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    ProfileModuleRoutingModule,]
})
export class ProfileModuleModule { }
