import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVacanciesComponent } from './top-vacancies.component';

describe('TopVacanciesComponent', () => {
  let component: TopVacanciesComponent;
  let fixture: ComponentFixture<TopVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopVacanciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
