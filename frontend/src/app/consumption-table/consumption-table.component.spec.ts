import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionTableComponent } from './consumption-table.component';

describe('ConsumptionTableComponent', () => {
  let component: ConsumptionTableComponent;
  let fixture: ComponentFixture<ConsumptionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumptionTableComponent]
    });
    fixture = TestBed.createComponent(ConsumptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
