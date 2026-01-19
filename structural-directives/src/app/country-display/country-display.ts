import { Component } from '@angular/core';

@Component({
  selector: 'app-country-display',
  standalone: false,
  templateUrl: './country-display.html',
  styleUrl: './country-display.css',
})
export class CountryDisplay {
  countries: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];
}
