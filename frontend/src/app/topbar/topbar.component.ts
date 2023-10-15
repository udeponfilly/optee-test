import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(private router: Router) {}

  onClickEnergy(): void {
    this.router.navigateByUrl('energy-types');
  }

  onClickConsumptions(): void {
    this.router.navigateByUrl('consumptions');
  }
}
