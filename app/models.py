
from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser

class User(AbstractBaseUser):
    email = models.EmailField(unique=True, blank=False)
    password = models.TextField(blank=False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []