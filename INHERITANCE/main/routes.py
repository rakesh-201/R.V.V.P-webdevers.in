from flask import Blueprint, render_template
from INHERITANCE import speak
from INHERITANCE.main.utils import main1
from INHERITANCE.users.forms import RegistrationForm, LoginForm

main = Blueprint('main', __name__)

@main.route('/',  methods=["GET", "POST"])
def home():
    form = LoginForm()
    form1 = RegistrationForm()
    return render_template('r.html', speak=speak, main1=main1, form=form, form1=form1)

@main.route('/about',  methods=["GET", "POST"])
def about():
    form = LoginForm()
    form1 = RegistrationForm()
    return render_template('about.html', speak=speak, main1=main1, form=form, form1=form1)
