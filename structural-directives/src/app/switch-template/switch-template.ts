import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-template',
  standalone: false,
  templateUrl: './switch-template.html',
  styleUrl: './switch-template.css',
})
export class SwitchTemplate {
  changeDiv: string = "name"

  setDiv(div: string) {
    this.changeDiv = div;
  }
}
