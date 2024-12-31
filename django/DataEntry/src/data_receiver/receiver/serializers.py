from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Location, Place

class PlaceSerializer(GeoFeatureModelSerializer):
    class Meta: 
        model = Place
        geo_field = 'location'
        fields = ('name', 'location', 'address', 'working_hours', 'description', 'created_at', 'updated_at', 'category')

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


