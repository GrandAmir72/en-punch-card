import { Component } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    standalone: false
})
export class LandingComponent {

  landingItems:Array<landingItemModel> = [
    {id:1,name:'attributes',ancher:'#attr'},
    {id:2,name:'services',ancher:'#services'},
    {id:3,name:'plans',ancher:'#plans'},
    {id:4,name:'blog',ancher:'#blog'},
  ]

}

 type landingItemModel = {
  id:number,
  name:string,
  ancher:string,
} 
