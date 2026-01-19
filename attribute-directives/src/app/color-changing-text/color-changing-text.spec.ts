import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangingText } from './color-changing-text';

describe('ColorChangingText', () => {
  let component: ColorChangingText;
  let fixture: ComponentFixture<ColorChangingText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorChangingText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorChangingText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
