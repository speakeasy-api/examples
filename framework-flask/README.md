# F1 Laps API Documentation Guide

## Overview

The F1 Laps API provides access to Formula 1 lap time data. This guide covers the API documentation using flask-smorest, which generates OpenAPI specifications directly from Flask code.

## Setup

### 1. Dependencies

Clone the repository:

```bash
git clone git@github.com:speakeasy-api/examples.git
cd framework-flask
```

Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 2. Database

Initialize and apply migrations:

```bash
flask db upgrade
```

Seed the database with the example data

```bash
python seed.py
```

### 3. Run the example

```bash
python app.py
```

### 4. Configuration

The API is configured in `app.py`:

```python
app.config["API_TITLE"] = "F1 Laps API"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.1.0"
app.config["OPENAPI_URL_PREFIX"] = "/"
app.config["OPENAPI_SWAGGER_UI_PATH"] = "/openapi-ui"
app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database-file.db"
```

## API Endpoints

### Health Check
- `GET /healthcheck`
  - Returns API health status

### Circuits
- `GET /circuits/`
  - List all circuits
- `POST /circuits/`
  - Create a new circuit
  - Required fields: `name`, `location`
- `GET /circuits/<circuit_id>`
  - Get a circuit by ID
- `PUT /circuits/<circuit_id>`
  - Update a circuit by ID
  - Required fields: `name`, `location`
- `DELETE /circuits/<circuit_id>`
  - Delete a circuit by ID

### Drivers
- `GET /drivers/`
  - List all drivers
- `POST /drivers/`
  - Create a new driver
  - Required fields: `name`, `code`
- `GET /drivers/<driver_id>`
  - Get a driver by ID
- `PUT /drivers/<driver_id>`
  - Update a driver by ID
  - Required fields: `name`, `code`
- `DELETE /drivers/<driver_id>`
  - Delete a driver by ID

### Lap Times
- `GET /lap-times/`
  - List all lap times
- `POST /lap-times/`
  - Create a new lap time
  - Required fields: `driver_id`, `circuit_id`, `lap_number`, `time_ms`
- `GET /lap-times/<lap_time_id>`
  - Get a lap time by ID
- `PUT /lap-times/<lap_time_id>`
  - Update a lap time by ID
  - Required fields: `driver_id`, `circuit_id`, `lap_number`, `time_ms`
- `DELETE /lap-times/<lap_time_id>`
  - Delete a lap time by ID

## Generating the OpenAPI Document

Run the application:

```bash
python app.py
```

To write a static OpenAPI document to the project root:

```bash
flask openapi write --format=yaml openapi.yaml
```

The document is generated to `openapi.yaml`.

## Viewing Documentation

1. Start the Flask development server:
   ```bash
   python app.py
   ```

2. Visit http://127.0.0.1:5000/openapi-ui

The OpenAPI UI provides:
- Interactive API documentation
- Request/response schemas
- Test endpoints directly in the browser
- Example requests and responses

The OpenAPI document is also available to download at http://127.0.0.1:5000/openapi.yaml.

## Project Structure

- `app.py` — Main application entry point and flask-smorest configuration
- `db.py` — Database initialization
- `models.py` — SQLAlchemy models (`Circuit`, `Driver`, `LapTime`)
- `schemas.py` — Marshmallow schemas (`CircuitSchema`, `DriverSchema`, `LapTimeSchema`)
- `resources.py` — API blueprints and endpoint definitions
- `migrations/` — Flask-Migrate database migrations
