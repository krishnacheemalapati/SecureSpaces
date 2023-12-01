from django.db import models

# Create your models here.

class Desk(models.Model):
    weight = models.PositiveIntegerField()
    locked = models.BooleanField(default=False)
    alarm = models.BooleanField(default=False)

class Notification(models.Model):
    desk = models.ForeignKey(Desk, on_delete=models.CASCADE)
    header = models.CharField(max_length=200)
    message = models.CharField(max_length=200)