from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *

# localhost
engine = create_engine('postgresql://karangrewal:girlguides@localhost:5432/girlguides')

metadata = MetaData()

user = Table('User', metadata,
    Column('user_id', Integer, primary_key=True),
    Column('first_name', String(12), nullable=False),
    Column('last_name', String(18), nullable=False),
    Column('email', String(60)),
    #schema='public'
)

badge = Table('Badge', metadata,
    Column('badge_id', Integer, primary_key=True),
    Column('name', String(12), nullable=False),
    Column('color', String(12), nullable=False),
    Column('img_url', String(120), nullable=False)
    #schema='public'
)

earned = Table('Earned', metadata,
	Column('user_id', Integer),
	Column('badge_id', Integer),
	Column('date_earned', String(20), nullable=False)
	#schema='public'
)

metadata.create_all(engine, checkfirst=True)