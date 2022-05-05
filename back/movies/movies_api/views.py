from .models import *
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from django.http.response import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import Http404
from rest_framework.views import APIView
from rest_framework import status


# -------------------------------------FBV--------------------------------------

@api_view(['GET'])
def genres_list(request):
    genres = Genre.objects.all()
    serializer = GenreSerializer(genres, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def genres_movies(request, genre_id):
    try:
        movies = Movie.objects.filter(genre=genre_id)
    except Movie.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def movies_list(request):
    movies = Movie.objects.all()
    serializers = MovieSerializer(movies, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def movies_detail(request, movie_id):
    try:
        movie = Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


# ----------------------------------------CBV--------------------------------

class UsersListAPIView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(id=pk)
        except User.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class ActorListAPIView(APIView):
    def get_objects(self, movie_id):
        try:
            return Actor.objects.filter(movie=movie_id)
        except Actor.DoesNotExist as e:
            raise Http404

    def get(self, request, movie_id=None):
        actors = self.get_objects(movie_id)
        serializer = ActorSerializer(actors, many=True)
        return Response(serializer.data)

    def post(self, request, movie_id):
        serializer = ActorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    permission_classes = [IsAuthenticated]


class ActorDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Actor.objects.get(id=pk)
        except Actor.DoesNotExist as e:
            raise Http404

    def get(self, request, movie_id=None, pk=None):
        actors = self.get_object(pk)
        serializer = ActorSerializer(actors)
        return Response(serializer.data)

    def put(self, request, movie_id=None, pk=None):
        actors = self.get_object(pk)
        serializer = ActorSerializer(instance=actors, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, movie_id=None, pk=None):
        actor = self.get_object(pk)
        actor.delete()
        return Response({'message': 'deleted'}, status=status.HTTP_204_NO_CONTENT)