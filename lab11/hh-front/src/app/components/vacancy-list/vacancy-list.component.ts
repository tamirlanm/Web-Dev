import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vacancy } from '../../models/vacancy';
import { Company } from '../../models/company';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VacancyListComponent implements OnInit {
  companyId: number = 0;
  company: Company | null = null;
  vacancies: Vacancy[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyId = +params['id']; // Convert to number
      this.loadCompanyDetails();
      this.loadCompanyVacancies();
    });
  }

  loadCompanyDetails(): void {
    this.loading = true;
    this.apiService.getCompany(this.companyId).subscribe({
      next: (data) => {
        this.company = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading company details';
        this.loading = false;
        console.error(err);
      }
    });
  }

  loadCompanyVacancies(): void {
    this.loading = true;
    this.apiService.getVacanciesByCompany(this.companyId).subscribe({
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