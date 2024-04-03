from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    

class Category(models.Model):
    name = models.CharField(max_length=100)