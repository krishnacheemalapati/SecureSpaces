from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Desk, Notification
from .serializers import DeskSerializer, NotificationSerializer

class DeskViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'])
    def get_alarm_status(self, request):
        try:
            desk = Desk.objects.get()
            return Response({'alarm': desk.alarm})
        except Desk.DoesNotExist:
            return Response({'error': 'Desk not found'}, status=404)

    @action(detail=False, methods=['post', 'put'])
    def update_desk(self, request):
        try:
            data = request.data
            serializer = DeskSerializer(data=data)
            if serializer.is_valid():
                desk = Desk.objects.get()
                desk.weight = serializer.validated_data.get('weight', desk.weight)
                desk.locked = serializer.validated_data.get('locked', desk.locked)
                desk.alarm = serializer.validated_data.get('alarm', desk.alarm)
                desk.save()
                return Response({'message': 'Desk updated successfully'})
            else:
                return Response(serializer.errors, status=400)
        except Desk.DoesNotExist:
            return Response({'error': 'Desk not found'}, status=404)

    @action(detail=False, methods=['put'])
    def create_desk(self, request):
        try:
            data = request.data
            serializer = DeskSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Desk created successfully'})
            else:
                return Response(serializer.errors, status=400)
        except:
            return Response({'error': 'Failed to create desk'}, status=500)

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    @action(detail=False, methods=['post'])
    def make_notification(self, request):
        try:
            data = request.data
            serializer = NotificationSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Notification created successfully'})
            else:
                return Response(serializer.errors, status=400)
        except Notification.DoesNotExist:
            return Response({'error': 'Notification not found'}, status=404)
