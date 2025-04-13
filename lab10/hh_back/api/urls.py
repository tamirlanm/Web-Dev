
from django.urls import path
from . import views 
from .views import (
    CompanyVacancies,
    VacancyList,
    VacancyDetail,
    TopTenVacancies
)

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', CompanyVacancies.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view()),
]
