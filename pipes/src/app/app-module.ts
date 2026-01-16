import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FirstPipe } from './first-pipe/first-pipe';
import { JsonPipe } from './json-pipe/json-pipe';
import { FirstpipePipe } from './firstpipe-pipe';
import { CustomPipe } from './custom-pipe/custom-pipe';

@NgModule({
  declarations: [
    App,
    FirstPipe,
    JsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomPipe
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
