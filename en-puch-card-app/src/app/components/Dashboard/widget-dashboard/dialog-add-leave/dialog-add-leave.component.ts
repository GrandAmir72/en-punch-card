import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
    selector: 'app-dialog-add-leave',
    templateUrl: './dialog-add-leave.component.html',
    styleUrl: './dialog-add-leave.component.css',
    standalone: false
})
export class DialogAddLeaveComponent {
  currentStep: number = 1;
  progressBar:number = 0;
  formHeader:string = 'Add Leave';
  typeOfLeave: 'h' | 'd' | undefined;
  readonly dialog = inject(MatDialog);

  nextStep(stepNumber: number) {
    switch (stepNumber) {
      case 1:
        this.currentStep = 2;
        this.progressBar = 50;
        this.formHeader = 'Choose Type of leave';
        break;
      case 2:
        this.progressBar = 100;
        this.dialog.closeAll()
        break;
    }
  }
  preStep(stepNumber: number) {
    switch (stepNumber) {
      case 2:
        this.currentStep = 1;
        this.progressBar = 0;
        this.formHeader = 'Add Leave';
        break;
      case 1:
        this.progressBar = 0;
        // this.currentStep = 5;
        
        break;
    }
  }

}
