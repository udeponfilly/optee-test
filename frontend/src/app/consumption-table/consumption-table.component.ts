import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Consumption } from '../models/consumption.models';
import { EnergyService } from '../energy-service.service';
import { map, tap } from 'rxjs';

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

      this.filteredConsumptions = this.consumptions.filter((consumption) => {
        if (typeof consumption.energyType === 'number') {
          return consumption.energyType === energyId;
        } else if (consumption.energyType && 'id' in consumption.energyType) {
          return consumption.energyType.id === energyId;
        }
        return false;
      });
    });
  }
}
