import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionComponentComponent } from '../expansion-component/expansion-component.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ExpansionComponentComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    
  ],
  exports:[
    ExpansionComponentComponent
  ]
})
export class SharedModuleModule { }
