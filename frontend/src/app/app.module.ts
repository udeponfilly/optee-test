import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EnergyTypeListComponent } from './energy-type-list/energy-type-list.component';
import { ConsumptionListComponent } from './consumption-list/consumption-list.component';

@NgModule({
  declarations: [AppComponent, ConsumptionFormComponent, EnergyTypeListComponent, ConsumptionListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
