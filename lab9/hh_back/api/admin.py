from django.contrib import admin
from .models import Company, Vacancy
# Register your models here.

@admin.register(Company)
class AdminCompany(admin.ModelAdmin):
    list_display = ( "id", "name", "description", "city",)
    search_fields = ("name","city")

@admin.register(Vacancy)
class AdminVacancy(admin.ModelAdmin):
    list_display = ("id", "name", "salary", "company")
    list_filter = ("company",)
    search_fields = ("name", "description")