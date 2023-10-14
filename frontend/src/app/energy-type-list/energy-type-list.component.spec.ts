import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyTypeListComponent } from './energy-type-list.component';

describe('EnergyTypeListComponent', () => {
  let component: EnergyTypeListComponent;
  let fixture: ComponentFixture<EnergyTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyTypeListComponent]
    });
    fixture = TestBed.createComponent(EnergyTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
