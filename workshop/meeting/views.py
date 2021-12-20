from django.db.models.query import QuerySet
from .models import Meeting
from .serializer import MeetingSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status


class MeetingViewSet(ModelViewSet):
    queryset = Meeting.objects.all()
    #permission_classes = [IsAuthenticated]
    serializer_class = MeetingSerializer

    def post(self, request):
        pass

    def delete(self, request):
        pass
