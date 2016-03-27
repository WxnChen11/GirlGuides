from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://karangrewal:girlguides@localhost/girlguides'
db = SQLAlchemy(app)

class Sample(db.Model):
	__tablename__ = 'sample1'
	id = db.Column('username', db.Integer, primary_key=True)
	user = db.Column('email', db.String())