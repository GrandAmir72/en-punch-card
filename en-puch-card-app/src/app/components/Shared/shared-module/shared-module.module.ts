import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionComponentComponent } from '../expansion-component/expansion-component.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AddOfficeComponent } from '../add-office/add-office.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    ExpansionComponentComponent,
    AddOfficeComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
  
  ],
  exports: [ExpansionComponentComponent, AddOfficeComponent,BreadcrumbComponent],
})
export class SharedModuleModule {}
