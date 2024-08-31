import { Component } from '@angular/core';

@Component({
  selector: 'app-all-offices',
  templateUrl: './all-offices.component.html',
  styleUrl: './all-offices.component.css',
})
export class AllOfficesComponent {
  offices: Array<any> = [
    {id:123,name:'Main',isActive:true,isAdmin:false,isOwner:true},
  ];
}
