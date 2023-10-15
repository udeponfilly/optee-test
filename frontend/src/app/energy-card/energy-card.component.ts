import { Component, Input, OnInit } from '@angular/core';
import { Energy } from '../models/energy.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-energy-card',
  templateUrl: './energy-card.component.html',
  styleUrls: ['./energy-card.component.scss'],
})
export class EnergyCardComponent implements OnInit {
  @Input() energy!: Energy;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getClasses() {
    return {
      electricity: this.energy.id === 1,
      gaz: this.energy.id === 2,
      water: this.energy.id === 3,
    };
  }

  onClick() {
    this.router.navigate(['add-consumption', this.energy.id]);
  }
}
