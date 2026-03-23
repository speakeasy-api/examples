from app import app
from models import db, Circuit, Driver, LapTime
import random

with app.app_context():
  max = Driver(name="Max Verstappen", code="VER")
  lec = Driver(name="Charles Leclerc", code="LEC")

  drivers = [max, lec]

  spa    = Circuit(name="Spa-Francorchamps", location="Belgium")
  monza  = Circuit(name="Monza", location="Italy")
  monaco = Circuit(name="Monaco", location="Monaco")

  circuits = [spa, monza, monaco]

  for driver in drivers:
    db.session.add(driver)
  
  for circuit in circuits:
    db.session.add(circuit)

  db.session.commit()

  laps = []

  for lap in range(10):
    laps.append(LapTime(driver_id=max.id, circuit_id=spa.id, lap_number=lap + 1, time_ms=random.randrange(90_000,105_000)))
    laps.append(LapTime(driver_id=lec.id, circuit_id=spa.id, lap_number=lap + 1, time_ms=random.randrange(90_000,105_000)))

    laps.append(LapTime(driver_id=max.id, circuit_id=monaco.id, lap_number=lap + 1, time_ms=random.randrange(90_000,105_000)))
    laps.append(LapTime(driver_id=lec.id, circuit_id=monaco.id, lap_number=lap + 1, time_ms=random.randrange(90_000,105_000)))

    laps.append(LapTime(driver_id=max.id, circuit_id=monza.id, lap_number=lap + 1, time_ms=random.randrange(90_000,105_000)))
    laps.append(LapTime(driver_id=lec.id, circuit_id=monza.id, lap_number=lap + 1, time_ms=random.randrange(90_000,105_000)))

  for lap in laps:
    db.session.add(lap)


  db.session.commit()