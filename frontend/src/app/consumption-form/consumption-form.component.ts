import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Energy } from '../models/energy.models';
import { EnergyService } from '../energy-service.service';
import { Consumption } from '../models/consumption.models';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-consumption-form',
  templateUrl: './consumption-form.component.html',
  styleUrls: ['./consumption-form.component.scss'],
})
export class ConsumptionFormComponent implements OnInit {
  consumptionForm!: FormGroup;
  energyId!: string | null;
  energyType$!: Observable<Energy>;
  consumption!: Consumption;
  cost!: number;
  energyType!: number;
  messages!: Message[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private energyService: EnergyService
  ) {}

  ngOnInit(): void {
    this.consumption = new Consumption();
    this.consumptionForm = this.fb.group({
      date: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
    });
    this.energyId = this.route.snapshot.paramMap.get('id');
    if (this.energyId) {
      this.energyType$ = this.energyService
        .getEnergyTypeById(+this.energyId)
        .pipe(
          tap((energyType) => {
            this.cost = energyType.averagePricePerUnit;
            this.energyType = energyType.id;
          })
        );
    }
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont indexés à partir de 0
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  onSubmit() {
    if (this.consumptionForm.valid) {
      this.consumption.energyType = this.energyType;
      this.consumption.date = this.formatDate(this.consumptionForm.value.date);
      this.consumption.quantity = this.consumptionForm.value.quantity;
      this.consumption.cost = this.cost * this.consumption.quantity;
      this.energyService.addConsumption(this.consumption).subscribe({
        next: (response) => {
          this.messages = [
            {
              severity: 'success',
              summary: 'Votre consommation a bien été enregistrée',
            },
          ];
        },
        error: (e) =>
          (this.messages = [
            {
              severity: 'error',
              summary: e,
            },
          ]),
      });
    } else {
      this.messages = [
        {
          severity: 'error',
          summary: 'Champs invalides',
        },
      ];
    }
  }
}
