import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Energy } from './models/energy.models';
import { Consumption } from './models/consumption.models';

@Injectable({
  providedIn: 'root',
})
export class EnergyService {
  private apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  getEnergyTypes(): Observable<Energy[]> {
    return this.http.get<Energy[]>(`${this.apiUrl}/energy`);
  }

  getEnergyTypeById(energyId: number | null): Observable<Energy> {
    return this.http.get<Energy>(`${this.apiUrl}/energy/${energyId}`);
  }

  addConsumption(consumption: Consumption): Observable<any> {
    return this.http.post(`${this.apiUrl}/consumptions`, consumption);
  }

  getConsumptions(): Observable<Consumption[]> {
    return this.http.get<Consumption[]>(`${this.apiUrl}/consumptions`);
  }
}
