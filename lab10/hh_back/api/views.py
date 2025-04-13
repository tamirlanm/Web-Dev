from django.shortcuts import render

from rest_framework.views import APIView
#from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Create your views here.
'''class CompanyListAPIView(APIView):
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
'''

#Function Based View
@api_view(['GET', 'POST'])
def  company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = CompanySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = CompanySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#Class Based View
'''
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
'''
class CompanyVacancies(generics.ListCreateAPIView):
    serializer_class = VacancySerializer
    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id = company_id)

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer
    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]
