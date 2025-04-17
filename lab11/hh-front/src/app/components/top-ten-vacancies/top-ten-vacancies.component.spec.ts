import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenVacanciesComponent } from './top-ten-vacancies.component';

describe('TopTenVacanciesComponent', () => {
  let component: TopTenVacanciesComponent;
  let fixture: ComponentFixture<TopTenVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopTenVacanciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
