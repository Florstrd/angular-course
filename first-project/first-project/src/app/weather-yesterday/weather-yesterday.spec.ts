import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherYesterday } from './weather-yesterday';

describe('WeatherYesterday', () => {
  let component: WeatherYesterday;
  let fixture: ComponentFixture<WeatherYesterday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherYesterday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherYesterday);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
