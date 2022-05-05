from rest_framework import serializers
from .models import *


class GenreSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'description', 'rate', 'length', 'cover', 'like', 'genre')


class UserSerializer(serializers.Serializer):
    first_name = serializers.CharField(read_only=True)
    last_name = serializers.CharField(read_only=True)
    username = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)
    password = serializers.CharField(read_only=True)
    img = serializers.CharField(read_only=True)

    def update(self, instance, validated_data):
        instance.status = validated_data['name']
        instance.save()
        return instance


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ('id', 'first_name', "last_name",'img','movies')