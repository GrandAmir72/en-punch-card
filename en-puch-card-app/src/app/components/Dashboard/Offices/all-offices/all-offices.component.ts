import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { AddOfficeComponent } from '../../../Shared/add-office/add-office.component';

@Component({
    selector: 'app-all-offices',
    templateUrl: './all-offices.component.html',
    styleUrl: './all-offices.component.css',
    standalone: false
})
export class AllOfficesComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  offices: Array<any> = [
    {id:123,name:'Main',isActive:true,isAdmin:false,isOwner:true},
  ];
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Punch Card - Offices`)
  }

  openDialog() {    
    this.dialog.open(AddOfficeComponent,{
      height: '400px',
      width: '600px',
    });

  }

}
