import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../energy-service.service';
import { Observable } from 'rxjs';
import { Energy } from '../models/energy.models';

@Component({
  selector: 'app-energy-type-list',
  templateUrl: './energy-type-list.component.html',
  styleUrls: ['./energy-type-list.component.scss'],
})
export class EnergyTypeListComponent implements OnInit {
  energyList$!: Observable<Energy[]>;

  constructor(private energyService: EnergyService) {}
  ngOnInit(): void {
    this.energyList$ = this.energyService.getEnergyTypes();
  }
}
