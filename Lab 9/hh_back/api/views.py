from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *

def companies(request):
    companies = list(companies.objects.values())
    
    return JsonResponse(companies, safe=False)

def show_company(request, id):
    companies = list(companies.objects.filter(id = companies.id).values())
    
    return JsonResponse(companies, safe=False)

def show_vacancies_of_company(request, id):
    companies = companies.objects.get(id = id)
    
    vacancies = list(vacancies.objects.filter(companies = companies.id).values())
    
    return JsonResponse(vacancies, safe=False)
    
    
def vacancies(request):
    vacancies = list(vacancies.objects.values())
    
    return JsonResponse(vacancies, safe=False)


def vacancy(request, id):
    vacancies = list(vacancies.objects.filter(id = vacancies.id).values())
    
    return JsonResponse(vacancies,safe=False)


def top_ten_vacancies(request,id):
    top_ten_vacancies = list(vacancies.objects.order_by('-salary')[:10].values())
    
    return JsonResponse(top_ten_vacancies, safe=False)
# Create your views here.
