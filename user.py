from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#app.config.from_pyfile('config.py')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://karangrewal@localhost/girlguides'

db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'results'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String())
    email = db.Column(db.String())
    last_name = db.Column(db.Integer)
