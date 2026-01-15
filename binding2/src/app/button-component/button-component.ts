import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-component',
  imports: [FormsModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  buttonColor = 'gray';
  textDisplay = 'none';
  inputDisplay = 'none'
  inputMessage = " ";
  isActive = false;

  onButtonClick() {
    this.isActive = !this.isActive;
    
    this.buttonColor = this.isActive ? "green" : "gray";
    this.textDisplay = this.isActive ? "block" : "none";
    this.inputDisplay = this.isActive ? "block" : "none";

  }
}
