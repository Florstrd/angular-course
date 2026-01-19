import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ImageDisplay } from './image-display/image-display';
import { CountryDisplay } from './country-display/country-display';
import { SwitchTemplate } from './switch-template/switch-template';

@NgModule({
  declarations: [
    App,
    ImageDisplay,
    CountryDisplay,
    SwitchTemplate
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
