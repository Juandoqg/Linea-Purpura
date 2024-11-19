from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('obtenerDatos/', views.obtenerDatos, name='obtenerDatos'),

]
