import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModuleModule } from './components/auth/auth-module/auth-module.module';
import { LandingComponent } from './components/landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModuleModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
