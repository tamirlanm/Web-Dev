import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Vacancy } from '../../models/vacancy';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-all-vacancies',
  templateUrl: './all-vacancies.component.html',
  styleUrls: ['./all-vacancies.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AllVacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadAllVacancies();
  }

  loadAllVacancies(): void {
    this.loading = true;
    this.apiService.getVacancies().subscribe({
      next: (data) => {
        this.vacancies = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading vacancies';
        this.loading = false;
        console.error(err);
      }
    });
  }
}