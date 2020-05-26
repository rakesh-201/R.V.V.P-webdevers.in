from django.shortcuts import redirect, render
from .models import User, Contact, Diary
from django.contrib import messages
from django.contrib.auth import login, logout
import requests
from django.http import HttpResponse
import json
from gtts import gTTS
import playsound
import os
import speech_recognition as sr;

x=False
def set(a):
    global x;
    x = a
def get():
    global x;
    return x
  

# Create your views here.
def text(request):
    return HttpResponse(request.POST['text'])


def home(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        email =  request.POST.get('email', '')
        password =  request.POST.get('password', '')
        confirm_password =  request.POST.get('confirmpassword', '')
        email1 = User.objects.filter(email=email)
        if email1:
            messages.warning(request, 'You already have an account, You may login.')
            return render(request, "home.html")
        else: 
            if  confirm_password == password:
                user = User(username = username, email = email, password = password)
                user.save()
                messages.success(request, 'Your account has been created successfully, you may now login.')
                return render(request, "home.html")
            else:
                messages.success(request, 'Your Password and Confirm Password Fields Did Not Match. Please Try Again.')
                return render(request, "home.html")
    return render(request, "home.html")


def login_(request):    
    if request.method == 'POST':
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        user = User.objects.filter(email=email, password=password)
        if  user:
            messages.success(request, 'You Have Been Successfully Loged In.')
            set(True)
            return render(request, "home1.html")
        else:
            messages.error(request, 'Invalid Email or Password, Please Check and Try Again.')
        return render(request, "home.html")
    if get():
        return render(request, "home1.html")
    return redirect("home")


def about(request):
    return render(request, "about.html")


def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        text = request.POST.get('text', '')
        contact = Contact(name = name, email = email, text = text)
        contact.save()
        messages.success(request, 'Thank You For Contacting Us, We Will Get Back To You Soon.')
    return render(request, "contact.html")


def logout(request):
    set(False);
    messages.success(request, 'You Have Been Successfully Logedout')
    return redirect("home")


def news(request):
    if get():
        if request.method == 'POST':
            url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=619d592e3df744d7afc8d8492e0de271"
            news = requests.get(url).text
            news = json.loads(news)
            articles = news['articles']
            arts = []
            for article in articles:
                arts.append(article['title'])
                tts=gTTS(text=article['title'], lang='en')
                filename='voice.mp3'
                tts.save(filename)
                playsound.playsound(filename)
                os.remove(filename)
                print(article['title'])
            art = json.dumps(arts)
            return HttpResponse(art)
        return render(request, "news.html", {'text': text})
    return redirect("home")


def songs(request):
    return render(request, "s1.html")


def speak(text):
    tts = gTTS(text)
    filename = "voice.mp3"
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)

def notebook(request):
    if get():
        if request.method == 'POST':
            id = request.user.id
            desc = request.POST.get('text', '')
            if len(desc)>0:
                diary = Diary(id=id, D_desc=desc)
                diary.save()
            else:        
                r = sr.Recognizer()
                with  sr.Microphone() as source:
                    tts = gTTS("Listening......")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    print("Listening......")
                    r.pause_threshold = 1
                    audio = r.listen(source)
                    print('done')
                    tts = gTTS("done")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                try:
                    print("Recognizing......")
                    query = r.recognize_google(audio, language = 'en-in')
                    print(f"User said: {query}\n")
                    tts = gTTS(f"User said:  {query}\n")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    diary = Diary(id=id, D_desc=query)
                    diary.save()
                except Exception as e:
                    print("Say that again please......")
                    speak("Say that again please......")
                    return HttpResponse(-1)
                return HttpResponse(query)
        return render(request, "notebook.html")
    return redirect("home")


def arijit(request):
    return render(request, "song_arijit.html")


def atif(request):
    return render(request, "song_atif.html")


def english(request):
    return render(request, "english.html")


def asha(request):
    return render(request, "asha.html")


def marathi(request):
    return render(request, "marathi.html")


def mdRafi(request):
    return render(request, "mdrafi.html")


def lata(request):
    return render(request, "lata.html")
