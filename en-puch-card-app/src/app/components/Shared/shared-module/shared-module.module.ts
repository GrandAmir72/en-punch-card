import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionComponentComponent } from '../expansion-component/expansion-component.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AddOfficeComponent } from '../add-office/add-office.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [ExpansionComponentComponent, AddOfficeComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule
  ],
  exports: [ExpansionComponentComponent, AddOfficeComponent],
})
export class SharedModuleModule {}
