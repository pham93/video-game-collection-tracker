# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-12-17 04:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20201217_0427'),
    ]

    operations = [
        migrations.AlterField(
            model_name='videogame',
            name='owned',
            field=models.CharField(choices=[('Owned', 'Owned'), ('Wish', 'Wish'), ('Unowned', 'Unowned')], max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='videogame',
            name='platform',
            field=models.CharField(choices=[('PS4', 'PS4'), ('XB1', 'XB1'), ('SWTCH', 'SWTCH'), ('PC', 'PC')], max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='videogame',
            name='progress',
            field=models.CharField(choices=[('Unplayed', 'Unplayed'), ('In Progress', 'In Progress'), ('Main Story Completed', 'Main Story Completed'), ('100% Completed', '100% Completed')], max_length=300, null=True),
        ),
        migrations.DeleteModel(
            name='OwnedStatus',
        ),
        migrations.DeleteModel(
            name='Platform',
        ),
        migrations.DeleteModel(
            name='ProgressStatus',
        ),
    ]