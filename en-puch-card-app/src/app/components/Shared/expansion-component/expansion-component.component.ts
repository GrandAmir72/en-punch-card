import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-component',
  templateUrl: './expansion-component.component.html',
  styleUrl: './expansion-component.component.css'
})
export class ExpansionComponentComponent {
  @Input('title') title : string | undefined = 'Default title';

}
