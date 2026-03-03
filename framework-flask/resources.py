from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import IntegrityError
from db import db
from models import Circuit, Driver, LapTime
from schemas import CircuitSchema, DriverSchema, LapTimeSchema

CircuitBlueprint = Blueprint("Circuits", "circuits", url_prefix="/circuits", description="Operations on circuits")

@CircuitBlueprint.route("/")
class CircuitList(MethodView):
    @CircuitBlueprint.response(200, CircuitSchema(many=True))
    def get(self):
        """List all circuits"""
        return Circuit.query.all()

    @CircuitBlueprint.arguments(CircuitSchema)
    @CircuitBlueprint.response(201, CircuitSchema)
    def post(self, new_data):
        """Create a new circuit"""
        circuit = Circuit(**new_data)
        db.session.add(circuit)
        db.session.commit()
        return circuit

@CircuitBlueprint.route("/<int:circuit_id>")
class CircuitDetail(MethodView):
    @CircuitBlueprint.response(200, CircuitSchema)
    def get(self, circuit_id):
        """Get circuit by ID"""
        return Circuit.query.get_or_404(circuit_id)

    @CircuitBlueprint.arguments(CircuitSchema)
    @CircuitBlueprint.response(200, CircuitSchema)
    def put(self, updated_data, circuit_id):
        """Update an existing circuit"""
        circuit = Circuit.query.get_or_404(circuit_id)
        circuit.name = updated_data["name"]
        circuit.location = updated_data["location"]
        db.session.commit()
        return circuit

    def delete(self, circuit_id):
        """Delete a circuit"""
        circuit = Circuit.query.get_or_404(circuit_id)
        db.session.delete(circuit)
        db.session.commit()
        return {"message": "Circuit deleted"}, 204


DriverBlueprint = Blueprint("Drivers", "drivers", url_prefix="/drivers", description="Operations on drivers")

@DriverBlueprint.route("/")
class DriverList(MethodView):
    @DriverBlueprint.response(200, DriverSchema(many=True))
    def get(self):
        """List all drivers"""
        return Driver.query.all()

    @DriverBlueprint.arguments(DriverSchema)
    @DriverBlueprint.response(201, DriverSchema)
    def post(self, new_data):
        """Create a new driver"""
        driver = Driver(**new_data)
        db.session.add(driver)
        db.session.commit()
        return driver

@DriverBlueprint.route("/<int:driver_id>")
class DriverDetail(MethodView):
    @DriverBlueprint.response(200, DriverSchema)
    def get(self, driver_id):
        """Get driver by ID"""
        return Driver.query.get_or_404(driver_id)

    @DriverBlueprint.arguments(DriverSchema)
    @DriverBlueprint.response(200, DriverSchema)
    def put(self, updated_data, driver_id):
        """Update an existing driver"""
        driver = Driver.query.get_or_404(driver_id)
        driver.name = updated_data["name"]
        driver.code = updated_data["code"]
        db.session.commit()
        return driver

    def delete(self, driver_id):
        """Delete a driver"""
        driver = Driver.query.get_or_404(driver_id)
        db.session.delete(driver)
        db.session.commit()
        return {"message": "Driver deleted"}, 204


LapTimeBlueprint = Blueprint("LapTimes", "lap_times", url_prefix="/lap-times", description="Operations on lap times")

@LapTimeBlueprint.route("/")
class LapTimeList(MethodView):
    @LapTimeBlueprint.response(200, LapTimeSchema(many=True))
    def get(self):
        """List all lap times"""
        return LapTime.query.all()

    @LapTimeBlueprint.arguments(LapTimeSchema)
    @LapTimeBlueprint.response(201, LapTimeSchema)
    def post(self, new_data):
        """Create a new lap time"""
        lap_time = LapTime(**new_data)
        db.session.add(lap_time)
        db.session.commit()
        return lap_time

@LapTimeBlueprint.route("/<int:lap_time_id>")
class LapTimeDetail(MethodView):
    @LapTimeBlueprint.response(200, LapTimeSchema)
    def get(self, lap_time_id):
        """Get lap time by ID"""
        return LapTime.query.get_or_404(lap_time_id)

    @LapTimeBlueprint.arguments(LapTimeSchema)
    @LapTimeBlueprint.response(200, LapTimeSchema)
    def put(self, updated_data, lap_time_id):
        """Update an existing lap time"""
        lap_time = LapTime.query.get_or_404(lap_time_id)
        lap_time.driver_id = updated_data["driver_id"]
        lap_time.circuit_id = updated_data["circuit_id"]
        lap_time.lap_number = updated_data["lap_number"]
        lap_time.time_ms = updated_data["time_ms"]
        db.session.commit()
        return lap_time

    def delete(self, lap_time_id):
        """Delete a lap time"""
        lap_time = LapTime.query.get_or_404(lap_time_id)
        db.session.delete(lap_time)
        db.session.commit()
        return {"message": "Lap time deleted"}, 204
