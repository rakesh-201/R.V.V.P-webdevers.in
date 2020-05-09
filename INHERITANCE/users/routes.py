from flask import Blueprint, render_template, flash, redirect, url_for
from INHERITANCE import speak, bcrypt
from INHERITANCE import db
import request
from flask_login import login_user, current_user
from INHERITANCE.users.forms import RegistrationForm, LoginForm
from INHERITANCE.models import User

users = Blueprint('users', __name__)

@users.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('main.home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_pw = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_pw)
        db.create_all()
        db.session.add(user)
        db.session.commit()
        flash(f'Your account has been created! You now may login.', 'success')
        return redirect(url_for('users.login'))
    return render_template ('register.html', title='Register', form=form, speak=speak) 


@users.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main.home'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('main.home'))
        else:    
            flash('Login Unsuccessful. Please check username or password', 'danger')
    return render_template ('login.html', title='Login', form=form, speak=speak ) 
