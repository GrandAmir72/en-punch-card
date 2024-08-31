import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { OfficesModuleRoutingModule } from './offices-module-routing.module';
import { AllOfficesComponent } from '../all-offices/all-offices.component';
import { OfficePageComponent } from '../office-page/office-page.component';


@NgModule({
  declarations: [
    AllOfficesComponent,
    OfficePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    OfficesModuleRoutingModule
  ]
})
export class OfficesModuleModule { }
