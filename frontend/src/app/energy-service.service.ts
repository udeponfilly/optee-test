import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Energy } from './models/energy.models';

@Injectable({
  providedIn: 'root',
})
export class EnergyService {
  private apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  getEnergyTypes(): Observable<Energy[]> {
    return this.http.get<Energy[]>(`${this.apiUrl}/energy`);
  }

  addConsumption(consumption: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/consumptions`, consumption);
  }

  getConsumptions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/consumptions`);
  }
}
