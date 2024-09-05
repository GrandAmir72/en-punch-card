import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartableComponent } from '../cartable/cartable.component';

const routes: Routes = [
  {path:'all',component:CartableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartableRoutingModule { }
