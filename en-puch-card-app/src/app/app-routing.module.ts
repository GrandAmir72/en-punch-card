import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth-module/auth-module.module').then(
        (m) => m.AuthModuleModule
      ),
  },
  { path: 'landing', component: LandingComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import(
        './components/Dashboard/dashboard-module/dashboard-module.module'
      ).then((m) => m.DashboardModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
