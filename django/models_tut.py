from django.db import models


class CommonInfo(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()

    class Meta:
        abstract = True


class Student(CommonInfo):
    home_group = models.CharField(max_length=5)



from django.db import models


class CommonInfo(models.Model):
    # ...
    class Meta:
        abstract = True
        ordering = ["name"]


class Student(CommonInfo):
    # ...
    class Meta(CommonInfo.Meta):
        db_table = "student_info"


# MULTI TABLE INHERITANCE  
from django.db import models


class Place(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=80)


class Restaurant(Place):
    serves_hot_dogs = models.BooleanField(default=False)
    serves_pizza = models.BooleanField(default=False)

# the data will reside in a different table so both of these are possible

Place.objects.filter(name="Bob's Cafe")
Restaurant.objects.filter(name="Bob's Cafe")