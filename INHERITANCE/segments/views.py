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
rr = 0
z = 1
nn = 0
aa = 1
def set(a):
    global x;
    x = a
    global rr
    rr = 0
    global nn
    nn = 0
    global z
    z = 1
    global aa
    aa = 1
    
def get():
    global x;
    return x


# Create your views here.
def home(request):
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    if request.method == 'GET':
        res = request.GET.get('res')
        if res:
            tts = gTTS("Welcome to the B Site sir. A site for the people with golden dreams.")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            tts = gTTS("To enjoy your services you need to have a account. Would you like to create one or want to login.")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            r = sr.Recognizer()
            global nn
            nn = 0
            with  sr.Microphone() as source:
                tts = gTTS("You may answer as create or login. Listening...")
                filename = "voice.mp3"
                tts.save(filename)
                playsound.playsound(filename)
                os.remove(filename)
                print("Listening......")
                r.energy_threshold = 1500
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
                if 'create' in query:
                    nn = 0
                    return HttpResponse("register")
                elif 'login' in query.lower():
                    nn = 0
                    return HttpResponse("login")
                else:
                    print(query)
                    tts = gTTS("Sorry, that didn't match our constraints, please try again!")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    return redirect("auxiliary_home")
            except Exception as e:
                print(e)
                if nn < 3:
                    nn += 3
                    print("Say that again please......")
                    tts = gTTS("Say that again please......")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    return redirect("auxiliary_home")
                else:
                    tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    return HttpResponse("Thank You...")
    if request.method == 'POST':
        username = request.POST.get('username', '')
        email =  request.POST.get('email', '')
        password =  request.POST.get('password', '')
        confirm_password =  request.POST.get('confirmpassword', '')
        email1 = User.objects.filter(email=email)
        if email:
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


def auxiliary_home(request):
    r = sr.Recognizer()
    with  sr.Microphone() as source:
        tts = gTTS("You may answer as create or login. Listening...")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        print("Listening......")
        r.energy_threshold = 1500
        r.pause_threshold = 1
        audio = r.listen(source)
        print('done')
        tts = gTTS("done")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
    global nn
    try:
        print("Recognizing......")
        query = r.recognize_google(audio, language = 'en-in')
        print(f"User said: {query}\n")
        tts = gTTS(f"User said:  {query}\n")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        if 'create' in query:
            return HttpResponse("register")
        elif 'login' in query.lower():
            return HttpResponse("login_page")
        else:
            print(query)
            tts = gTTS("Sorry, that didn't match our constraints, please try again!")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return redirect("auxiliary_home")
    except Exception as e:
        print(e)
        if nn < 3:
            nn += 3
            print("Say that again please......")
            speak("Say that again please......")
            return redirect("auxiliary_home")
        else:
            tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return HttpResponse("Thank You...")
    nn = 0
    return redirect("home")


def login_(request):
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    if request.method == 'GET':
        respon = request.GET.get('respon')
        if respon:
            tts = gTTS("Welcome Sir. You may now enjoy our services. Our services include Latest News, Mellodious Music and a Diary for our own stories.")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            tts = gTTS("What will you like to start with?. Listening......")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            r = sr.Recognizer()
            with  sr.Microphone() as source:
                print("Listening......")
                r.energy_threshold = 1500
                r.pause_threshold = 1
                audio = r.listen(source)
                print('done')
                tts = gTTS("done")
                filename = "voice.mp3"
                tts.save(filename)
                playsound.playsound(filename)
                os.remove(filename)
            global nn
            try:
                print("Recognizing......")
                query = r.recognize_google(audio, language = 'en-in')
                print(f"User said: {query}\n")
                tts = gTTS(f"User said:  {query}\n")
                filename = "voice.mp3"
                tts.save(filename)
                playsound.playsound(filename)
                os.remove(filename)
                if 'news' in query.lower():
                    nn = 0
                    return HttpResponse("news")
                elif 'music' in query.lower() or 'songs' in query.lower() or 'song' in query.lower():
                    nn = 0
                    return HttpResponse("music")
                elif 'diary' in query.lower():
                    nn = 0
                    return HttpResponse("diary")
                else:
                    print(query)
                    tts = gTTS("Sorry, that didn't match our constraints, please try again!")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    return redirect("auxiliary_login_")
            except Exception as e:
                print(e)
                if nn < 3:
                    nn += 3
                    print("Say that again please......")
                    speak("Say that again please......")
                    return redirect("auxiliary_login_")
                else:
                    tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    return HttpResponse("Thank You...")

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


def auxiliary_login_(request):
    r = sr.Recognizer()
    with  sr.Microphone() as source:
        tts = gTTS("What will you like to start with? Listening......")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        print("Listening......")
        r.energy_threshold = 1500
        r.pause_threshold = 1
        audio = r.listen(source)
        print('done')
        tts = gTTS("done")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
    global nn
    try:
        print("Recognizing......")
        query = r.recognize_google(audio, language = 'en-in')
        print(f"User said: {query}\n")
        tts = gTTS(f"User said:  {query}\n")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        if 'news' in query.lower():
            nn = 0
            return HttpResponse("news")
        elif 'music' in query.lower() or 'songs' in query.lower() or 'song' in query.lower():
            nn = 0
            return HttpResponse("music")
        elif 'diary' in query.lower():
            nn = 0
            return HttpResponse("diary")
        else:
            print(query)
            tts = gTTS("Sorry, that didn't match our constraints, please try again!")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return redirect("auxiliary_login_")
    except Exception as e:
        print(e)
        if nn < 3:
            nn += 3
            print("Say that again please......")
            speak("Say that again please......")
            return redirect("auxiliary_login_")
        else:
            tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return HttpResponse("Thank You...")


def about(request):
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    return render(request, "about1.html")


def contact(request):
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        text = request.POST.get('text', '')
        contact = Contact(name = name, email = email, text = text)
        contact.save()
        messages.success(request, 'Thank You For Contacting Us, We Will Get Back To You Soon.')
    return render(request, "contact.html")


def login_page(request):
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    if request.method == 'GET':
        respo = request.GET.get('respo')
        if respo:
            tts = gTTS("To login you need to add your email ID and your password. You can use Tab key and fill in these details in the order mentioned.")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
    if request.method == 'POST':
        email =  request.POST.get('email', '')
        password =  request.POST.get('password', '')
        user = User.objects.filter(email=email, password=password)
        if user:
            set(1)
            return redirect("login_")
        else:
            tts = gTTS("They don't exist any such user. Please enter correct email ID and password.")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return redirect("home")
    return render(request, "login.html")


def register(request):
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    if request.method == 'GET':
        resp = request.GET.get("resp")
        if resp:
            tts = gTTS("To register you need to add a username, an email id, a password and need to confirm that password. You can use Tab key and fill in these fields in the order mentioned.")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return HttpResponse("Done")
    if request.method == 'POST':
        username = request.POST.get('username', '')
        email =  request.POST.get('email', '')
        password =  request.POST.get('password', '')
        confirm_password =  request.POST.get('confirm-password', '')
        email1 = User.objects.filter(email=email)
        if email1 and email:
            messages.warning(request, 'You already have an account, You may login.')
            return redirect("home")
        else:
            if  confirm_password == password:
                if password:
                    user = User(username = username, email = email, password = password)
                    user.save()
                    messages.success(request, 'Your account has been created successfully, you may now login.')
                    return redirect("home")
                else:
                    messages.success(request, 'Please enter the details correctly.')
                    return redirect("home")
            else:
                messages.success(request, 'Your Password and Confirm Password Fields Did Not Match. Please Try Again.')
                return render(request, "home.html")
    return render(request, "register.html")


def logout(request):
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
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
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    if get():
        if request.method == 'GET':
            response = request.GET.get('response')
            if response == '1':
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
            elif response == '0':
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
    if os.path.exists("voice.mp3"):
        os.remove("voice.mp3")
    return render(request, "s1.html")


def speak(text):
    tts = gTTS(text)
    filename = "voice.mp3"
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)


def auxiliary_notebook(request):
    r = sr.Recognizer()
    with  sr.Microphone() as source:
        tts = gTTS(" You now may speak, Listening...")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        print("Listening......")
        r.energy_threshold = 1500
        r.pause_threshold = 1
        audio = r.listen(source)
        print('done')
        tts = gTTS("done")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
    global nn
    try:
        print("Recognizing......")
        query = r.recognize_google(audio, language = 'en-in')
        print(f"User said: {query}\n")
        tts = gTTS(f"User said:  {query}\n")
        filename = "voice.mp3"
        tts.save(filename)
        playsound.playsound(filename)
        os.remove(filename)
        diary = Diary(id=request.user.id, D_desc=query)
        diary.save()   
    except Exception as e:
        print(e)
        if nn < 3:
            nn += 3
            print("Say that again please......")
            speak("Say that again please......")
            return redirect("auxiliary_notebook")
        else:
            tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
            filename = "voice.mp3"
            tts.save(filename)
            playsound.playsound(filename)
            os.remove(filename)
            return HttpResponse("Thank You...")
    nn = 0
    return HttpResponse(json.dumps(query))

def notebook(request):
    if os.path.exists('voice.mp3'):
        os.remove('voice.mp3')
    global aa
    if get():
        if request.method == 'POST':
            if (aa+1)%3 == 0:
                aa += 1
                id = request.user.id
                desc = request.POST.get('text', '')
                if len(desc)>0:
                    diary = Diary(id=id, D_desc=desc)
                    diary.save()
                    return redirect("notebook")
                if 1:
                    tts = gTTS("Welcome to our diary section. You may save any of your stories here... ")
                    filename = "voice.mp3"
                    tts.save(filename)
                    playsound.playsound(filename)
                    os.remove(filename)
                    r = sr.Recognizer()
                    with  sr.Microphone() as source:
                        tts = gTTS(" You now may speak, Listening...")
                        filename = "voice.mp3"
                        tts.save(filename)
                        playsound.playsound(filename)
                        os.remove(filename)
                        print("Listening......")
                        r.energy_threshold = 1500
                        r.pause_threshold = 1
                        audio = r.listen(source)
                        print('done')
                        tts = gTTS("done")
                        filename = "voice.mp3"
                        tts.save(filename)
                        playsound.playsound(filename)
                        os.remove(filename)
                        global nn
                        nn = 0
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
                        print(e)
                        if nn < 3:
                            nn+=1
                            print("Say that again please......")
                            speak("Say that again please......")
                            return redirect("auxiliary_notebook")
                        else:
                            tts = gTTS("There is some problem with the voice connection. Please reload the page and try again...")
                            filename = "voice.mp3"
                            tts.save(filename)
                            playsound.playsound(filename)
                            os.remove(filename)
                            return HttpResponse("Thank You...")
                    nn = 0
                    return HttpResponse(json.dumps(query))
            else:
                aa += 1
                diary = Diary.objects.filter(id = request.user.id)
                stories = diary.values('D_desc', 'date')
                print('entered')
                print(stories)
                _dict_ = []
                for i in stories:
                    desc = i['D_desc']
                    date = i['date'].strftime("%d-%m-%Y")
                    dict_ = [desc, date]
                    _dict_.append(dict_)
                txt = json.dumps({'txt':_dict_})    
                return HttpResponse(txt)
        return render(request, "notebook.html")
    return redirect("home")


def diary(request):
    if get():
        id = request.user.id
        desc = request.POST.get('text', '')
        if len(desc)>0:
            diary = Diary(id=id, D_desc=desc)
            diary.save()
        return redirect("notebook")
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

def kishore(request):
    if get():
        return render(request, "kishore.html")
    return redirect("home")

def error_404(request, *args, **kwargs):
    return render(request, "404.html")


def error_400(request, *args, **kwargs):
    return render(request, "400.html")


def error_403(request, *args, **kwargs):
    return render(request, "403.html")


def error_500(request, *args, **kwargs):
    return render(request, "500.html")