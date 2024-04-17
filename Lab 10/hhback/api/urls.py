from django.contrib import admin
from django.urls import path
from .old_views import *
from .views.company_views import company_list, company_details, company_vacancies
from .views.vacancy_views import VacancyListAPIView, VacancyDetailAPIView, VacancyTopTenAPIView


urlpatterns = [
    path("companies/", company_list),
    path("companies/<int:id>/", company_details),
    path("companies/<int:id>/vacancies/", company_vacancies),
    path("vacancies/", VacancyListAPIView.as_view()),
    path("vacancies/<int:id>/", VacancyDetailAPIView.as_view()),
    path("vacancies/top_ten/", VacancyTopTenAPIView.as_view()),
]

# urlpatterns = [
#     path('companies/', get_companies),
#     path('companies/<int:id>/', get_company_by_id),
#     path('companies/<int:id>/vacancies/', get_vacancy_by_company),
#     path('vacancies/', get_vacancies),
#     path('vacancies/<int:id>/', get_vacancies_by_id),
#     path('vacancies/top_ten/', top_ten_vacancies),
# ]