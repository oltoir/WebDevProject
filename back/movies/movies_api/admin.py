from django.contrib import admin
from .models import *
# from django.contrib.auth.admin import UserAdmin


admin.site.register(User)
admin.site.register(Genre)
admin.site.register(Movie)
admin.site.register(Actor)
