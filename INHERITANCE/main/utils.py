from flask import url_for
from INHERITANCE import Listener
def main1():
    query = Listener()
    if 'register' in query:
        return url_for('users.register')
    elif 'login' in query:
        return url_for('users.login')