import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDisplay } from './country-display';

describe('CountryDisplay', () => {
  let component: CountryDisplay;
  let fixture: ComponentFixture<CountryDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
