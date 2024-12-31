from django import forms 
from django.contrib.postgres.forms import DateTimeRangeField as DateTimeRangeFormField
from .models import Place


class PlaceAdminForm(forms.ModelForm):
    working_hours = DateTimeRangeFormField()

    class Meta:
        model = Place
        fields = '__all__'