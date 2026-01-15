import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from './weather/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Weather],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = "Fundamentals of Angular.js";
  protected readonly introduction = "Hi! My name is Dennis and I'm a fourth year IT-student. In my free time I enjoy cars and disc golf.";
}
