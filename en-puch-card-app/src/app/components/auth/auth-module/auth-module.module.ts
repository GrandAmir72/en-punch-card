import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthMainComponent } from '../auth-main/auth-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    AuthModuleRoutingModule,
    MatTabsModule
  ]
})
export class AuthModuleModule { }
