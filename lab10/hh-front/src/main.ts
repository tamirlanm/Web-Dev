import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withDebugTracing } from '@angular/router';
import { CompanyListComponent } from './app/components/company-list/company-list.component';
import { VacancyListComponent } from './app/components/vacancy-list/vacancy-list.component';
import { TopTenVacanciesComponent } from './app/components/top-ten-vacancies/top-ten-vacancies.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllVacanciesComponent } from './app/components/all-vacancies/all-vacancies.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
      { path: 'companies', component: CompanyListComponent },
      { path: 'companies/:id/vacancies', component: VacancyListComponent },
      { path: 'vacancies/top-ten', component: TopTenVacanciesComponent }, 
      { path: 'vacancies', component: AllVacanciesComponent },
      { path: 'vacancies/:id', component: VacancyListComponent },
      { path: '**', redirectTo: 'companies' }
    ])
  ]
}).catch(err => console.error('Error bootstrapping the application:', err));