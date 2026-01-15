import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  protected readonly temperature = "-20";
  protected readonly description = "its cloudy";
}
