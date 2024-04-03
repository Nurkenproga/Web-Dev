from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Products, Category

def products(request):
    active_products = Products.objects.filter(is_active=True)
    
    products_list = list(active_products.values())
    
    return JsonResponse(products_list, safe=False)


def categories(request):
    categories_list = list(Category.objects.values())
    
    return JsonResponse(categories_list, safe=False)


def show_product(request, product_id):
    product = list(Products.objects.filter(id = product_id).values())
    
    return JsonResponse(product, safe=False)


def show_category(request, category_id):
    category = list(Category.objects.filter(id = category_id).values())
    
    return JsonResponse(category, safe=False)


def show_category_products(request, id):
    category = Category.objects.get(id = id)
    
    products = list(Products.objects.filter(category = category.id).values())
    
    return JsonResponse(products, safe=False)
# Create your views here.
