from django.shortcuts import render
from django.views import View
from django.contrib.auth.hashers import make_password
from .models import User
from django.http import JsonResponse

# Create your views here.


class Index(View):
    def get(self, request, *args, **kwargs):
        
        return render(request, 'app/index.html')

    def post(self, request, *args, **kwargs):  
        print("request:",request.POST.keys())

        try:
           User.objects.get(email=request.POST['email'])
        except:
            User.objects.create(email=request.POST['email'], password=make_password(request.POST['password']))
            return JsonResponse({'msg':'success!'})

        return JsonResponse({'msg':'Email already exist try other!'})

