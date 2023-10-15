import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyCardComponent } from './energy-card.component';

describe('EnergyCardComponent', () => {
  let component: EnergyCardComponent;
  let fixture: ComponentFixture<EnergyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyCardComponent]
    });
    fixture = TestBed.createComponent(EnergyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
