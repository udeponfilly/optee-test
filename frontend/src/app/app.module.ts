import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    ConsumptionFormComponent,
    EnergyTypeListComponent,
    EnergyCardComponent,
    TopbarComponent,
    DashboardComponent,
    ErrorComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
