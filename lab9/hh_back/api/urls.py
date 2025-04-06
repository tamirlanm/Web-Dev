
from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListAPIView.as_view()),
    path('companies/<int:id>/', views.CompanyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesAPIView.as_view()),
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view()),
]
