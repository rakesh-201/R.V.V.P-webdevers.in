from django.urls import path
from . import views
from django.conf.urls import handler400, handler403, handler404, handler500


urlpatterns=[
    path("", views.home, name="home"),
    path("auxiliary_home", views.auxiliary_home, name="auxiliary_home"),
    path("login", views.login_, name="login_"),
    path("auxiliary_login_", views.auxiliary_login_, name="auxiliary_login_"),
    path("login_page", views.login_page, name="login_page"),
    path("register", views.register, name="register"),
    path("about", views.about, name="about"),
    path("contact", views.contact, name="contact"),
    path("logout", views.logout, name="logout"),
    path("news", views.news, name="news"),
    path("News_", views.News, name="News"),
    path("notebook", views.notebook, name="notebook"),
    path("notebook_", views.auxiliary_notebook, name="auxiliary_notebook"),
    path("diary", views.diary, name="diary"),
    path("songs", views.songs, name="songs"),
    path("arijit", views.arijit, name="arijit"),
    path("atif", views.atif, name="atif"),
    path("english", views.english, name="english"),
    path("asha", views.asha, name="asha"),
    path("marathi", views.marathi, name="marathi "),
    path("mdRafi", views.mdRafi, name="mdRafi"),
    path("lata", views.lata, name="lata"),
    path("hindi", views.hindi, name="hindi"),
    path("kishore", views.kishore, name="kishore"),
    path("songs_2020", views.songs_2020, name="songs_2020"),
    path("songs_2019", views.songs_2019, name="songs_2019"),
    path("favourite", views.favourite, name="favourite"),
]

handler400 = views.error_400;
handler404 = views.error_404;
handler500 = views.error_500;
handler403 = views.error_403;
