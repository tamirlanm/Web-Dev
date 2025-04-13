import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "../models/company";
import { Vacancy } from "../models/vacancy";

@Injectable({
    providedIn: 'root'
})

export class ApiService{
    private BASE_URL = 'http://localhost:8000/api';

    constructor(private http: HttpClient){
    
    }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(`${this.BASE_URL}/companies/`);
    }
    getCompany(id: number): Observable<Company> {
        return this.http.get<Company>(`${this.BASE_URL}/companies/${id}}/`);
    }

    getVacancies(): Observable<Vacancy[]>{
        return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`);
    }

    getVacanciesByCompany(companyId : number): Observable<Vacancy[]>{
        return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
    }

    getVacancy(id : number) : Observable<Vacancy>{
        return this.http.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}/`);
    }

    getTopTenVacancies(): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top_ten/`);
    }
}