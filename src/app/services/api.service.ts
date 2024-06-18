import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DentalProcess {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/GetInfo';

  constructor(private http: HttpClient) {}

  getDentalProcesses(): Observable<DentalProcess[]> {
    return this.http.get<DentalProcess[]>(this.apiUrl);
  }
}
