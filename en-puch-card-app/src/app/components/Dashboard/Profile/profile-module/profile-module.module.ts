import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DialogChangePasswordComponent } from '../dialog-change-password/dialog-change-password.component';
import { DialogAllOrdersComponent } from '../dialog-all-orders/dialog-all-orders.component';
import { DialogResourcesComponent } from '../dialog-resources/dialog-resources.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ProfileComponent,
    DialogChangePasswordComponent,
    DialogAllOrdersComponent,
    DialogResourcesComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ProfileModuleRoutingModule,
  ],
})
export class ProfileModuleModule {}
