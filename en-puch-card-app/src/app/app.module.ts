import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModuleModule } from './components/auth/auth-module/auth-module.module';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardModuleModule } from './components/Dashboard/dashboard-module/dashboard-module.module';
import { SharedModuleModule } from './components/Shared/shared-module/shared-module.module';
import {MatNativeDateModule} from '@angular/material/core';
import { ReportModuleModule } from './components/Dashboard/Reports/report-module/report-module.module';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModuleModule,
    DashboardModuleModule,
    SharedModuleModule,
    MatNativeDateModule,
    ReportModuleModule
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
