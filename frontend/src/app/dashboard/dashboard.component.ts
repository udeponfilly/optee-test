import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumption-list',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  energy!: string[];
  selectedEnergy!: string;

  ngOnInit(): void {
    this.energy = ['Électricité', 'Gaz', 'Eau'];
  }
}
