import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMainComponent } from '../auth-main/auth-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/main', pathMatch: 'full' },
  { path: 'main', component: AuthMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthModuleRoutingModule {}
