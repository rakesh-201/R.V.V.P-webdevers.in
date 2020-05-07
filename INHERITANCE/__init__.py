from flask import Flask
from flask_sqlalchemy import  SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
from INHERITANCE.config import Config
import playsound
import speech_recognition as sr
from flask_gtts import gtts
from gtts import gTTS
import os

db = SQLAlchemy()
bcrypt=Bcrypt()
login_manager = LoginManager()
login_manager.login_view = 'users.login' 
login_manager.login_message_category = 'info'
mail = Mail()

def  Create_app(Config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)  
    from INHERITANCE.users.routes import users
    from INHERITANCE.main.routes import main
    # from R_Blog.errors.handlers import errors
    
    app.register_blueprint(users)
    app.register_blueprint(main)
    # app.register_blueprint(errors)
    # app.register_blueprint(chats)
    
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    mail.init_app(app)
    gtts(app)
    return app 

def speak(text):
    tts=gTTS(text=text, lang='en')
    filename='INHERITANCE/static/voice.mp3'
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)
    
def Listener():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        speak('Listening.....')
        audio = r.listen(source)
        speak('OK')
    try:
        query = r.recognize_google(audio, language='en-in')
        speak(f'You said: {query}')
    except Exception as e:
        speak('Please repeat.....')
        return 'None'
        # query = Listener()
    return query    

    
    
# from INHERITANCE import Create_app
# >>> app = create_app()
# >>> app.app_context().push()