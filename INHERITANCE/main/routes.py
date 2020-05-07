from flask import Blueprint,render_template
from INHERITANCE import speak
from INHERITANCE.main.utils import main1

main = Blueprint('main', __name__)

@main.route('/home',  methods=["GET"])
def home():
    # speak('Hello Sir')
    return render_template('home.html')

@main.route('/',  methods=["GET", "POST"])
def inihome():
    text = 'Hello Sir. Welcome to this site! Will You Like to Register Or LogIn'
    return render_template('home.html', speak=speak, text=text, main1=main1)
