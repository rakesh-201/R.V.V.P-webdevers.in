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

x = False
rr = 1
z = 1
def set(a):
    global x;
    x = a
    global rr
    rr=0
    global z
    z=1
    
def get():
    global x;
    return x
  
  
  

# Create your views here.
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


def News(request):
    r = sr.Recognizer()
    with  sr.Microphone() as source:
        tts = gTTS("Listening......")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        print("Listening......")
        r.pause_threshold = 1
        sr.Recognizer().energy_threshold = 1500
        r.energy_threshold = 1500
        audio = r.listen(source)
        print('done')
        tts = gTTS("Done")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
    try:
        query = r.recognize_google(audio, language = 'en-in')
        if "business" in query:
            url_ = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=619d592e3df744d7afc8d8492e0de271"
        elif 'entertainment' in query:
            url_ = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=619d592e3df744d7afc8d8492e0de271"
        elif ('sport' in query.lower()) or ('sports' in query.lower()):
            url_ = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=619d592e3df744d7afc8d8492e0de271"
        else:
            print(query)
            return HttpResponse(json.dumps(["Thank You..."])) 
    except Exception as e:
        global rr
        rr += 1
        tts = gTTS("Please say that again")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        if rr<3:
            return redirect("News")
        else:
            rr=0
            tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return HttpResponse(json.dumps(["Thank You..."]))
    rr=0
    news = requests.get(url_).text
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


def news(request):
    if get():
        if request.method == 'POST':
            global z
            if z:
                z=0
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
            else:
                z=1
                tts=gTTS(text="The news is further sorted into three categories as follows: First, Business ; Second, Entertainment ; Third , Sports", lang='en')
                filename='voice.mp3'
                tts.save(filename)
                playsound.playsound(filename)
                os.remove(filename)
                r = sr.Recognizer()
                with  sr.Microphone() as source:
                    tts = gTTS("Listening......")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    print("Listening......")
                    r.pause_threshold = 1
                    sr.Recognizer().energy_threshold = 1500
                    r.energy_threshold = 1500
                    audio = r.listen(source)
                    print('done')
                    tts = gTTS("Done")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)

                try:
                    query = r.recognize_google(audio, language = 'en-in')
                    if "business" in query.lower():
                        url_ = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=619d592e3df744d7afc8d8492e0de271"
                    elif 'entertainment' in query.lower():
                        url_ = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=619d592e3df744d7afc8d8492e0de271"
                    elif ('sport' in query.lower()) or ('sports' in query.lower()) :
                        url_ = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=619d592e3df744d7afc8d8492e0de271"
                    else:
                        print(query)
                        return HttpResponse(json.dumps(["Thank You..."])) 
                except Exception as e:
                    global rr
                    rr += 1
                    tts = gTTS("Please say that again")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    if rr<3:
                        return redirect("News")
                    else:
                        tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
                        filename = "voice.mp3"
                        tts.save(filename)
                        playsound.playsound(filename)
                        os.remove(filename)
                        return HttpResponse(json.dumps(["Thank You..."]))

                rr=0
                news = requests.get(url_).text
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
        return render(request, "news.html")
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
    if get():
        return render(request, "song_arijit.html")
    return redirect("home")

def atif(request):
    if get():
        return render(request, "song_atif.html")
    return redirect("home")
        

def english(request):
    if get():
        return render(request, "english.html")
    return redirect("home")


def asha(request):
    if get():
        return render(request, "asha.html")
    return redirect("home")


def marathi(request):
    if get():
        return render(request, "marathi.html")
    return redirect("home")


def mdRafi(request):
    if get():
        return render(request, "mdrafi.html")
    return redirect("home")


def lata(request):
    if get():
        return render(request, "lata.html")
    return redirect("home")


def hindi(request):
    if get():
        return render(request, "hindi.html")
    return redirect("home")
