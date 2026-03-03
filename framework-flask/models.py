from db import db
import datetime

class TimestampMixin(object):
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)

class Circuit(TimestampMixin, db.Model):
  __tablename__ = "circuits"
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), nullable=False)
  location = db.Column(db.String(80), nullable=False)

class Driver(TimestampMixin, db.Model):
  __tablename__ = "drivers"
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), nullable=False)
  code = db.Column(db.String(80), nullable=False)

class LapTime(TimestampMixin, db.Model):
  __tablename__ = "lap_times"
  id = db.Column(db.Integer, primary_key=True)
  driver_id = db.Column(db.Integer, db.ForeignKey(Driver.id))
  circuit_id = db.Column(db.Integer, db.ForeignKey(Circuit.id))
  lap_number = db.Column(db.Integer)
  time_ms = db.Column(db.Integer)
