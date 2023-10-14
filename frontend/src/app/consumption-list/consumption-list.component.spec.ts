import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionListComponent } from './consumption-list.component';

describe('ConsumptionListComponent', () => {
  let component: ConsumptionListComponent;
  let fixture: ComponentFixture<ConsumptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumptionListComponent]
    });
    fixture = TestBed.createComponent(ConsumptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
