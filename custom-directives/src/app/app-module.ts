import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ChangeBg } from './change-bg';
import { ButtonComponent } from './button-component/button-component';
import { RandomTextColor } from './random-text-color';

@NgModule({
  declarations: [
    App,
    ChangeBg,
    ButtonComponent,
    RandomTextColor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
