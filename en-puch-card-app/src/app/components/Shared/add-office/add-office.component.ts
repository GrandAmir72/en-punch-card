import { Component } from '@angular/core';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrl: './add-office.component.css',
})
export class AddOfficeComponent {
  currentStep: number = 1;
  progressBar:number = 0;
  nextStep(stepNumber: number) {
    switch (stepNumber) {
      case 1:
        this.currentStep = 2;
        this.progressBar = 25;
        break;
      case 2:
        this.currentStep = 3;
        this.progressBar = 50;
        break;
      case 3:
        this.currentStep = 4;
        this.progressBar = 75;
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
        break;
      case 3:
        this.currentStep = 2;
        this.progressBar = 25;
        break;
      case 2:
        this.currentStep = 1;
        this.progressBar = 0;
        break;
      case 1:
        this.progressBar = 0;
        // this.currentStep = 5;
        
        break;
    }
  }
}
