from __future__ import unicode_literals

from django.db import models
from django.core.validators import *

from django.contrib.auth.models import User, Group

from django.contrib import admin
import base64

class Event(models.Model):
    eventtype = models.CharField(max_length=1000, blank=False)
    timestamp = models.DateTimeField()
    userid = models.CharField(max_length=1000, blank=True)
    requestor = models.GenericIPAddressField(blank=False)

    def __str__(self):
        return str(self.eventtype)

class EventAdmin(admin.ModelAdmin):
    list_display = ('eventtype', 'timestamp')

class ApiKey(models.Model):
    owner = models.CharField(max_length=1000, blank=False)
    key = models.CharField(max_length=5000, blank=False)

    def __str__(self):
        return str(self.owner) + str(self.key)

class ApiKeyAdmin(admin.ModelAdmin):
    list_display = ('owner','key')

class VideoGame(models.Model):
    title = models.CharField(max_length=100, blank=False)
    summary = models.CharField(max_length=300, blank=False)
    platformChoices = [
        ('PS4','PS4'),
        ('XB1','XB1'),
        ('SWTCH','SWTCH'),
        ('PC','PC')
    ]
    platform = models.CharField(max_length=300, choices=platformChoices, null=True)
    developer = models.CharField(max_length=300, blank=False)
    publisher = models.CharField(max_length=300, blank=False)
    ownedChoices = [
        ('Owned','Owned'),
        ('Wish','Wish'),
        ('Unowned','Unowned')
    ]
    owned = models.CharField(max_length=300, choices=ownedChoices, null=True)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], blank=False)
    progressChoices = [
        ('Unplayed','Unplayed'),
        ('In Progress','In Progress'),
        ('Main Story Completed','Main Story Completed'),
        ('100% Completed','100% Completed')
    ]
    progress= models.CharField(max_length=300, choices=progressChoices, null=True)
    upload = models.ImageField(upload_to='./static/images/')

class VideoGameAdmin(admin.ModelAdmin):
    list_display = ('title','summary','platform','developer','publisher','owned','rating','progress','upload')
