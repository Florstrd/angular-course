import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button-component/button-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Binding assignments";
}
