from django.urls import path
from . import views

urlpatterns=[
    path("", views.home, name="home"),
    path("text", views.text, name="ajax-test-view"),
    path("login", views.login_, name="login_home"),
    path("about", views.about, name="about"),
    path("contact", views.contact, name="contact"),
    path("logout", views.logout, name="logout"),
    path("songs", views.songs, name="songs"),
    path("news", views.news, name="news"),
    path("notebook", views.notebook, name="notebook"),
    path("songs/arijit", views.arijit, name="notebook"),
    path("songs/atif", views.atif, name="notebook"),
    path("songs/english", views.english, name="english"),
    path("songs/asha", views.asha, name="asha"),
    path("songs/marathi", views.marathi, name="marathi "),
    path("songs/mdRafi", views.mdRafi, name="mdRafi"),
    path("songs/lata", views.lata, name="lata"),
]
