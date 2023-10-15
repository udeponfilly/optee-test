import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyTypeListComponent } from './energy-type-list/energy-type-list.component';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'energy-types', component: EnergyTypeListComponent },
  { path: 'add-consumption/:id', component: ConsumptionFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/energy-types', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
