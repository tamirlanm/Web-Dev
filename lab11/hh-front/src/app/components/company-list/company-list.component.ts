import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Company } from '../../models/company';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.loading = true;
    this.apiService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading companies';
        this.loading = false;
        console.error(err);
      }
    });
  }

  viewCompanyVacancies(companyId: number): void {
    this.router.navigate(['/companies', companyId, 'vacancies']);
  }
}