import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {
  numberOfReport: number | undefined;
  showReport:boolean | undefined = false;
  switchBtns(numberSwitch: number) {
    this.numberOfReport = numberSwitch;
    this.showReport = true;
  }
}
