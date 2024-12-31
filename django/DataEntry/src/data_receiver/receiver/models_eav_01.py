from django.db import models
from django.contrib.postgres.fields import DateTimeRangeField

# validation 
from django.core.exceptions import ValidationError

# Non-related imports
from datetime import datetime


class Place(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)

    # location = models.CharField(max_length=255)
    location = models.PointField(geography=True)
    address = models.CharField(300)

    working_hours = models.DateTimeRangeField() # tsrange field for working hours

    description = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # class Meta:
    #     db_table = 'my_schema"."my_spatial_model'
    # class Meta:
    #     constraints = [
    #         models.CheckConstraint(
    #             check=models.Q(working_hours__startswith=('(')) | models.Q(working_hours__startswith=('[')),
    #             name='valid_working_hours_range',
    #         ),
    #     ]
    # class Meta:
    #     indexes = [
    #         GistIndex(fields=['working_hours']),
    #     ]
    # class Meta:
    #     indexes = [
    #         models.Index(fields=['working_hours'], name='working_hours_idx', opclasses=['gist']),
    #     ]

    def clean(self):
        super().clean()
        if self.working_hours:
            start, end = self.working_hours.lower, self.working_hours.upper
            if start >= end:
                raise ValidationError("Start time must be before end time.")

    def __str__(self):
        return self.name
    
    def is_open_at(self, timestamp: datetime) -> bool: 
        return self.working_hours.contains(timestamp)


class Location(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
    

class AmbianceFarsi(models.Model):
    label = models.CharField(max_length=50, db_collation="fa_IR.UTF-8")
    description = models.CharField(max_length=256, blank=True, null=True, db_collation="fa_IR.UTF-8")

    def __str__(self):
        return self.label
    

class AmbianceEnglish(models.Model):
    label = models.CharField(max_length=50)
    description = models.CharField(max_length=200, blank=True, null=True)
    farsi = models.ForeignKey('AmbianceFarsi', on_delete=models.CASCADE, related_name='translations')

    def __str__(self):
        return self.label

class Attribute(models.Model):
    label = models.CharField(max_length=128)
    type = models.ForeignKey('EntityType', on_delete=models.CASCADE, related_name='attributes')

    def __str__(self):
        return self.label

class EntityType(models.Model):
    label = models.CharField(max_length=128)

    def __str__(self):
        return self.label

class Value(models.Model):
    entity = models.IntegerField()  # Generic entity ID
    type = models.ForeignKey('EntityType', on_delete=models.CASCADE, related_name='values')
    attribute = models.ForeignKey('Attribute', on_delete=models.CASCADE, related_name='values')
    value = models.CharField(max_length=128)

    def __str__(self):
        return f'{self.entity} - {self.attribute.label} - {self.value}'



class PlaceAmbiance(models.Model):
    place = models.ForeignKey('Place', on_delete=models.CASCADE, related_name='ambiences')
    ambiance = models.ForeignKey('AmbianceEnglish', on_delete=models.CASCADE, related_name='places')

    class Meta:
        unique_together = ('place', 'ambiance')  # To avoid duplicate entries

    def __str__(self):
        return f'{self.place.name} - {self.ambiance.label}'

class GameCafe(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=255)
    working_hours = models.CharField(max_length=255)  # Use a library for tsrange if needed

    def __str__(self):
        return self.name
    
    


