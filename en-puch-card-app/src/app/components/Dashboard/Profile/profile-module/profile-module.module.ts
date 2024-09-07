import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    ProfileModuleRoutingModule,]
})
export class ProfileModuleModule { }
