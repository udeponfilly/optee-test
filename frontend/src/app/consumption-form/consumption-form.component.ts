import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consumption-form',
  templateUrl: './consumption-form.component.html',
  styleUrls: ['./consumption-form.component.scss'],
})
export class ConsumptionFormComponent implements OnInit {
  consumptionForm!: FormGroup;
  energyId!: string | null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.consumptionForm = this.fb.group({
      date: ['', Validators.required],
      energyType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
      cost: ['', [Validators.required, Validators.min(0)]],
    });
    this.energyId = this.route.snapshot.paramMap.get('id');
    console.log(this.energyId);
  }

  onSubmit() {
    if (this.consumptionForm.valid) {
      // Traitement de la soumission du formulaire
      console.log(this.consumptionForm.value);
    }
  }
}
