import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EnergyTypeListComponent } from './energy-type-list/energy-type-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergyCardComponent } from './energy-card/energy-card.component';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './topbar/topbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { ErrorComponent } from './error/error.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { ConsumptionTableComponent } from './consumption-table/consumption-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumptionFormComponent,
    EnergyTypeListComponent,
    EnergyCardComponent,
    TopbarComponent,
    DashboardComponent,
    ErrorComponent,
    ConsumptionTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    InputNumberModule,
    MessagesModule,
    SelectButtonModule,
    TableModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
