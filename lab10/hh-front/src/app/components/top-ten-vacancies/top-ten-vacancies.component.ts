import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Vacancy } from '../../models/vacancy';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-top-ten-vacancies',
  templateUrl: './top-ten-vacancies.component.html',
  styleUrls: ['./top-ten-vacancies.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TopTenVacanciesComponent implements OnInit {
  topVacancies: Vacancy[] = [];
  loading = true; 
  error: string | null = null;

  constructor(private apiService: ApiService) { 
    console.log('TopTenVacanciesComponent initialized');
  }

  ngOnInit(): void {
    console.log('TopTenVacanciesComponent - ngOnInit');
    this.loadTopVacancies();
  }

  loadTopVacancies(): void {
    console.log('Attempting to load top vacancies');
    this.apiService.getTopTenVacancies().subscribe({
      next: (data) => {
        console.log('Top vacancies loaded:', data);
        this.topVacancies = data;
        this.loading = false;
      },

      error: (err) => {
        console.error('Error loading top vacancies:', err);
        this.error = 'Error loading top vacancies. Please try again later.';
        this.loading = false;
      }
    });
  }
}