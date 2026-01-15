import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-yesterday',
  imports: [],
  templateUrl: './weather-yesterday.html',
  styleUrl: './weather-yesterday.css',
})
export class WeatherYesterday {
  @Input() data: string = ""
}
