from .models import Meeting
from rest_framework import serializers


class MeetingSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Meeting
        fields = ['id', 'Name', 'LastName', 'Phone', 'Email', 'Car', 'Make', 'Kilometers',
                  'Model', 'Problem', 'Date']
