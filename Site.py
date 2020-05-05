from flask import Flask, render_template
from flask_gtts import gtts, gTTS
import playsound
import os
app = Flask(__name__)
gtts(app, temporary=False)

def speak(text):
    tts=gTTS(text=text, lang='en')
    filename='static/voice.mp3'
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)
    
@app.route('/',  methods=["GET"])
def home():
    filename = speak('Hello Sir')
    return render_template('home.html', filename = filename, playsound = playsound)


if __name__ == '__main__':
    app.run(debug=True)
