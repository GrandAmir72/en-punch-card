import { Component } from '@angular/core';

@Component({
    selector: 'app-add-office',
    templateUrl: './add-office.component.html',
    styleUrl: './add-office.component.css',
    standalone: false
})
export class AddOfficeComponent {
  currentStep: number = 1;
  progressBar:number = 0;
  formHeader:string = 'Add Office';
  nextStep(stepNumber: number) {
    switch (stepNumber) {
      case 1:
        this.currentStep = 2;
        this.progressBar = 25;
        this.formHeader = 'Choose scope of your business';
        break;
      case 2:
        this.currentStep = 3;
        this.progressBar = 50;
        this.formHeader = 'Office Nickname';
        break;
      case 3:
        this.currentStep = 4;
        this.progressBar = 75;
        this.formHeader = 'Number of days you want to use';
        break;
      case 4:
        this.progressBar = 100;
        // this.currentStep = 5;

        break;
    }
  }
  preStep(stepNumber: number) {
    switch (stepNumber) {
      case 4:
        this.currentStep = 3;
        this.progressBar = 50;
        this.formHeader = 'Office Nickname';
        break;
      case 3:
        this.currentStep = 2;
        this.progressBar = 25;
        this.formHeader = 'Choose scope of your business';
        break;
      case 2:
        this.currentStep = 1;
        this.progressBar = 0;
        this.formHeader = 'Add Office';
        break;
      case 1:
        this.progressBar = 0;
        // this.currentStep = 5;
        
        break;
    }
  }
}
