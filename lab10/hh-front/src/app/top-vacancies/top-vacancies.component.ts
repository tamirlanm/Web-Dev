import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models/vacancy';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-top-vacancies',
  imports: [],
  templateUrl: './top-vacancies.component.html',
  styleUrl: './top-vacancies.component.css'
})
export class TopVacanciesComponent implements OnInit{
  topVacancies: Vacancy[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadTopVacancies();
  }

  loadTopVacancies(): void {
    this.loading = true;
    this.apiService.getTopTenVacancies().subscribe({
      next: (data) => {
        this.topVacancies = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading top vacancies';
        this.loading = false;
        console.error(err);
      }
    });
  }

}
