import { Component } from '@angular/core';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  buttonColor = 'gray';
  inputMessage = "";
  isActive = false;

  onButtonClick() {
    this.isActive = !this.isActive;
    
    this.buttonColor = this.isActive ? "green" : "gray";
  }
}
