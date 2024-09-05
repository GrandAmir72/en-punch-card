import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartableRoutingModule } from './cartable-routing.module';
import { CartableComponent } from '../cartable/cartable.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    CartableComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    CartableRoutingModule
  ]
})
export class CartableModule { }
