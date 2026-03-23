from marshmallow import Schema, fields

class BookSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    author = fields.Str(required=True)
    description = fields.Str()

class CircuitSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    location = fields.Str(required=True)
    created_at = fields.DateTime(dump_only=True)

class DriverSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    code = fields.Str(required=True)
    created_at = fields.DateTime(dump_only=True)

class LapTimeSchema(Schema):
    id = fields.Int(dump_only=True)
    driver_id = fields.Int(required=True)
    circuit_id = fields.Int(required=True)
    lap_number = fields.Int(required=True)
    time_ms = fields.Int(required=True)
    created_at = fields.DateTime(dump_only=True)