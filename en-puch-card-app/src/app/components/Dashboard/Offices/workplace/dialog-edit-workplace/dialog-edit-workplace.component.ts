import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-edit-workplace',
  templateUrl: './dialog-edit-workplace.component.html',
  styleUrl: './dialog-edit-workplace.component.css'
})
export class DialogEditWorkplaceComponent {
  showTheMap:boolean = false;
  showTheLatLong:boolean = false;

  limitLocation(e:any){
    this.showTheMap = e.checked;    
  }
  latLongtitudeToggle(e:any){
    this.showTheLatLong = e.checked;    
    
  } 
}
