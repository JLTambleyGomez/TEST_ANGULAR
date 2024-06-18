import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

interface DentalProcess {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  dentalProcesses: DentalProcess[] = [];

  private apiUrl = 'http://localhost:3000/GetInfo';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDentalProcesses().subscribe({
      next: (data) => {
        this.dentalProcesses = data;
      },
      error: (error) => {
        console.error('Error fetching dental processes', error);
      }
    });
  }

  getDentalProcesses(): Observable<DentalProcess[]> {
    return this.http.get<DentalProcess[]>(this.apiUrl);
  }
}
