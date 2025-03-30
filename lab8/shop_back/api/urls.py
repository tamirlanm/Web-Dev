'''from django.urls import path
from api import views

urlpatterns = [
    path('products/',views.product_list),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:id>/',views.category_detail),
    path('categories/<int:id>/products/', views.products_list_by_category)
]
'''

from django.urls import path
from .views import product_list, product_detail, category_list, category_detail, products_list_by_category

urlpatterns = [
    path('products/', product_list),
    path('products/<int:id>/', product_detail),
    path('categories/', category_list),
    path('categories/<int:id>/', category_detail),
    path('categories/<int:id>/products/', products_list_by_category),
]
