import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { SharedModuleModule } from "../../../Shared/shared-module/shared-module.module";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileModuleRoutingModule,
    SharedModuleModule
]
})
export class ProfileModuleModule { }
