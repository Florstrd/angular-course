import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPipe } from './first-pipe';

describe('FirstPipe', () => {
  let component: FirstPipe;
  let fixture: ComponentFixture<FirstPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
