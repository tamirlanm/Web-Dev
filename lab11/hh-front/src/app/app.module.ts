import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { TopTenVacanciesComponent } from './components/top-ten-vacancies/top-ten-vacancies.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/companies', pathMatch: 'full' },
      { path: 'companies', component: CompanyListComponent },
      { path: 'companies/:id/vacancies', component: VacancyListComponent },
      { path: 'vacancies/', component: VacancyListComponent},
      { path: 'vacancies/:id', component: VacancyListComponent},
      { path: 'vacancies/top-ten', component: TopTenVacanciesComponent }
    ]),
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
    TopTenVacanciesComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }