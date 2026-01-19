import { Component } from '@angular/core';

@Component({
  selector: 'app-image-display',
  standalone: false,
  templateUrl: './image-display.html',
  styleUrl: './image-display.css',
})
export class ImageDisplay {
  imagePath = "assets/images/angular.png"
  isClicked = false

  showToggle() {
    this.isClicked = !this.isClicked;
  }
}
