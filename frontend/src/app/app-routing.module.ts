import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyTypeListComponent } from './energy-type-list/energy-type-list.component';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'energy-types', component: EnergyTypeListComponent },
  { path: 'add-consumption/:id', component: ConsumptionFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/energy-types', pathMatch: 'full' },
  { path: '**', redirectTo: '/energy-types' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
