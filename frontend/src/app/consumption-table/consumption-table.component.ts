import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Consumption } from '../models/consumption.models';
import { EnergyService } from '../energy-service.service';

@Component({
  selector: 'app-consumption-table',
  templateUrl: './consumption-table.component.html',
  styleUrls: ['./consumption-table.component.scss'],
})
export class ConsumptionTableComponent implements OnInit, OnChanges {
  @Input() energy!: string;
  consumptions!: Consumption[];
  filteredConsumptions!: Consumption[];
  energyId!: number;
  regionConsumption!: string;
  buildingConsumption!: string;

  constructor(private energyService: EnergyService) {}

  ngOnInit(): void {
    this.energyService.getConsumptions().subscribe((data: Consumption[]) => {
      this.consumptions = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.energyService.getConsumptions().subscribe((data: Consumption[]) => {
      this.consumptions = data;
      const energyId =
        changes['energy'].currentValue === 'Électricité'
          ? 1
          : changes['energy'].currentValue === 'Gaz'
          ? 2
          : 3;

      this.regionConsumption =
        energyId === 1 ? '370 kWh' : energyId === 2 ? '120 m³' : '1 550 L';

      this.buildingConsumption =
        energyId === 1 ? '390 kWh' : energyId === 2 ? '100 m³' : '1 700 L';

      this.regionConsumption = this.regionConsumption + ' / mois';
      this.buildingConsumption = this.buildingConsumption + ' / mois';

      this.filteredConsumptions = this.consumptions.filter((consumption) => {
        if (typeof consumption.energyType === 'number') {
          return consumption.energyType === energyId;
        } else if (consumption.energyType && 'id' in consumption.energyType) {
          return consumption.energyType.id === energyId;
        }
        return false;
      });
      this.filteredConsumptions.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    });
  }
}
