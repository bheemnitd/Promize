from django.urls import path
from .views import Index
urlpatterns=[

    path('app/', Index.as_view()),
    # path('login/', LoginView.as_view(), name='login'),
    # path('register/', RegisterView.as_view(), name='register')
]