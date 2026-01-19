import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TextColor } from './text-color';
import { ColorChangingText } from './color-changing-text/color-changing-text';
import { SetTextColor } from './set-text-color';
import { TextTransform } from './text-transform';

@NgModule({
  declarations: [
    App,
    ColorChangingText
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextColor,
    SetTextColor,
    TextTransform
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
