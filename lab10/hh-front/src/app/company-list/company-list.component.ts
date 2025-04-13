import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-company-list',
  imports: [ Router, ApiService],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companies: Company[] = [];
  loading = false;
  error: string |  null = null;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
  }
  loadCompanies(): void {
    this.loading =  true;
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
