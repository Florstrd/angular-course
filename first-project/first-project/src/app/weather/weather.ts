import { Component } from '@angular/core';
import { WeatherYesterday } from '../weather-yesterday/weather-yesterday';

@Component({
  selector: 'app-weather',
  imports: [WeatherYesterday],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  protected readonly temperature = "-20";
  protected readonly description = "its cloudy";
  protected readonly yesterday = "Yesterdays weather was -15 and it was cloudy";
}
