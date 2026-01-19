import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTemplate } from './switch-template';

describe('SwitchTemplate', () => {
  let component: SwitchTemplate;
  let fixture: ComponentFixture<SwitchTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
