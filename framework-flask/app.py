from flask import Flask
from healthcheck import HealthCheck
from flask_smorest import Api
from flask_migrate import Migrate
from db import db
import models
from resources import CircuitBlueprint, DriverBlueprint, LapTimeBlueprint
import yaml

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["API_TITLE"] = "F1 Laps API"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.1.0"
app.config["OPENAPI_URL_PREFIX"] = "/"
app.config["OPENAPI_SWAGGER_UI_PATH"] = "/openai-ui"
app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database-file.db"

db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)
api.register_blueprint(CircuitBlueprint)
api.register_blueprint(DriverBlueprint)
api.register_blueprint(LapTimeBlueprint)

health = HealthCheck()

# Add server information to the OpenAPI spec
api.spec.options["servers"] = [
    {
        "url": "http://127.0.0.1:5000",
        "description": "Local development server"
    }
]

app.add_url_rule("/healthcheck", "healthcheck", view_func=lambda: health.run())

# Serve OpenAPI spec document endpoint for download
@app.route("/openapi.yaml")
def openapi_yaml():
    spec = api.spec.to_dict()
    return app.response_class(
        yaml.dump(spec, default_flow_style=False),
        mimetype="application/x-yaml"
    )

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True)
