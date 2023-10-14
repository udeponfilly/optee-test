import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyTypeListComponent } from './energy-type-list/energy-type-list.component';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { ConsumptionListComponent } from './consumption-list/consumption-list.component';

const routes: Routes = [
  { path: 'energy-types', component: EnergyTypeListComponent },
  { path: 'add-consumption', component: ConsumptionFormComponent },
  { path: 'consumptions', component: ConsumptionListComponent },
  { path: '', redirectTo: '/energy-types', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
