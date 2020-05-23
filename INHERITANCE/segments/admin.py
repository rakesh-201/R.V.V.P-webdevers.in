from django.contrib import admin
from .models import User, Contact, Diary

# Register your models here.
admin.site.register(User);
admin.site.register(Contact);
admin.site.register(Diary);