from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    if request.method == 'POST':
        pass
    return render(request, "home.html")




def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")