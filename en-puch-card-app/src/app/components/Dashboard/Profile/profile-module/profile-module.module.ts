import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    ProfileModuleRoutingModule,]
})
export class ProfileModuleModule { }
