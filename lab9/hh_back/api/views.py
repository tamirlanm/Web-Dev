from django.shortcuts import render

from rest_framework.views import APIView
#from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Create your views here.
class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)
    
class CompanyDetailAPIView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company)
            return Response(serializer.data)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
    
class CompanyVacanciesAPIView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id = id)
            vacancies = company.vacancies.all()
            serializer = VacancySerializer(vacancies, many = True)
            return Response(serializer.data)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)
    
class VacancyDetailAPIView(APIView):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id = id)
            serializer = VacancySerializer(vacancy)
            return Response(serializer.data)
        except Vacancy.DoesNotExist:
            return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)
        
class TopTenVacanciesAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)
