from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    # path('login/', obtain_jwt_token),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('genres/', genres_list),
    path('genres/<int:genre_id>/', genres_movies),
    path('movies/', movies_list),
    path('movies/<int:movie_id>/', movies_detail),
    path('movies/<int:movie_id>/actors/', ActorListAPIView.as_view()),
    path('movies/<int:movie_id>/actors/<int:pk>/', ActorDetailAPIView.as_view()),
    path('users/', UsersListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view()),
    path('actors/', ActorListAPIView.as_view()),
    path('actors/<int:pk>/', ActorDetailAPIView.as_view())
]