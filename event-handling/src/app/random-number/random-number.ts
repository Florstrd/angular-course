import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-random-number',
  imports: [FormsModule],
  templateUrl: './random-number.html',
  styleUrl: './random-number.css',
})
export class RandomNumber {

  randomNumber: number = 0;
  inputNumber: number = 0;
  outputNumber: number = 0;
  divideNumber: number = 0;

  onButtonClick() {
    this.randomNumber = Math.floor(Math.random()*100);
    this.outputNumber = this.randomNumber + this.inputNumber;
  }

  division() {
    this.outputNumber = this.outputNumber / this.divideNumber;
  }
}
