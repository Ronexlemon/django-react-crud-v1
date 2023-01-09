from .import views
from rest_framework import routers

from django.urls import path, include
router = routers.DefaultRouter()
router.register(r'todos', views.Todoview, 'todo')
urlpatterns = [
    path('api/', include(router.urls))
]
