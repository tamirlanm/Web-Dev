import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVacanciesComponent } from './all-vacancies.component';

describe('AllVacanciesComponent', () => {
  let component: AllVacanciesComponent;
  let fixture: ComponentFixture<AllVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllVacanciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
