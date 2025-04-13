
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { VacancyListComponent } from "./vacancy-list/vacancy-list.component";
import { TopVacanciesComponent } from "./top-vacancies/top-vacancies.component";

@NgModule({
    declarations:[
        AppComponent,
        CompanyListComponent,
        VacancyListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/companies', pathMatch: 'full'},
            { path: 'companies', component: CompanyListComponent},
            { path: 'companies/:id/vacancies', component: VacancyListComponent},
            { path: 'vacancies/top_ten', component: TopVacanciesComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {} 