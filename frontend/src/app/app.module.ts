import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EnergyTypeListComponent } from './energy-type-list/energy-type-list.component';
import { ConsumptionListComponent } from './consumption-list/consumption-list.component';
import { EnergyCardComponent } from './energy-card/energy-card.component';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './topbar/topbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsumptionFormComponent,
    EnergyTypeListComponent,
    ConsumptionListComponent,
    EnergyCardComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
