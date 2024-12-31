from django.contrib import admin
from .forms import PlaceAdminForm
from ..models import Place

class PlaceAdmin(admin.ModelAdmin):
    form = PlaceAdminForm

admin.site.register(Place, PlaceAdmin)