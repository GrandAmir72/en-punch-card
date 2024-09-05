import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css',
})
export class AttendanceComponent implements OnInit {
  dateAttendance: string | undefined;
  timeAttendance: string | undefined;
  emojies = ['1','2','3','4','5','6'];
  ngOnInit(): void {
    let date = new Date();
    this.dateAttendance =
      date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let stringMin;
    if (minutes < 10) {
      stringMin = '0' + minutes;
    } else {
      stringMin = minutes;
    }
    this.timeAttendance = hours + ':' + stringMin;
    
  }
}
