from django.shortcuts import render
from .models import Product, Category
from django.http import JsonResponse
# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request,id):
    products = Product.objects.filter(id=id)
    for product in products:
        return JsonResponse(product.to_json())
    return JsonResponse({"error": "Product not found"})

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe = False)

def category_detail(request, id):
    categories = Category.objects.filter(id=id)
    for category in categories:
        return JsonResponse(category.to_json())
    return JsonResponse({"error": "Category not found"})

def products_list_by_category(request, id):
    categories = Category.objects.filter(id=id)
    for category in categories:
        products = Product.objects.filter(category_id = id)
        products_json = [product.to_json() for product in products]
        return JsonResponse(products_json, safe = False)
    return JsonResponse({"error": "Category not found"})