from django.db import models
from django.conf import settings
import datetime as datetime


# Create your models here.

class Meeting(models.Model):
    Name = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    Phone = models.CharField(max_length=15)
    Email = models.CharField(max_length=100)
    Car = models.CharField(max_length=100)
    Make = models.CharField(max_length=100)
    Kilometers = models.IntegerField()
    Model = models.IntegerField()
    Problem = models.CharField(max_length=1000)
    Date = models.DateTimeField(
        default=datetime.datetime.now, auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.Name+' '+self.LastName+' '+self.Phone+' '+self.Email+' '+self.Car+' '+self.Make+' '+' '+self.Kilometers+' '+self.Model+' '+self.Problem+' '+self.Date
