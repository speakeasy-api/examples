# F1 Laps API - Laravel PHP

A Laravel PHP implementation of the Formula 1 lap times API. This API provides endpoints for managing drivers, circuits, and lap time data.

## Overview

This is a Laravel version of the F1 Laps API, providing the same functionality as the Rails version but built with PHP and Laravel framework.

## Features

- **Drivers Management**: Create and list F1 drivers
- **Circuits Management**: Create and list racing circuits
- **Lap Times**: Record and query lap times with flexible filtering
- **Health Check**: API health and version information

## Setup

### Prerequisites

- PHP 8.2 or higher
- Composer
- SQLite (default) or MySQL/PostgreSQL

### Installation

1. Install dependencies:
```bash
composer install
```

2. Set up your environment:
```bash
cp .env.example .env
php artisan key:generate
```

3. Run migrations and seed the database with demo data:
```bash
php artisan migrate --seed
```

Or to start fresh with demo data:
```bash
php artisan migrate:fresh --seed
```

4. Start the development server:
```bash
php artisan serve
```

The API will be available at `http://localhost:8000`.

## Demo Data

The application includes database seeders that populate the database with realistic F1 data:
- **10 F1 Drivers** (Verstappen, Hamilton, Leclerc, Norris, etc.)
- **10 Famous Circuits** (Monaco, Silverstone, Monza, Spa, etc.)
- **30+ Lap Times** with realistic lap times in milliseconds

This demo data makes it easy to test the API endpoints without having to create data manually.

## API Endpoints

All endpoints are prefixed with `/api/v1`.

### Health Check

- `GET /api/v1/health` - Get API health status

### Drivers

- `GET /api/v1/drivers` - List all drivers
- `POST /api/v1/drivers` - Create a new driver

**Create Driver Request:**
```json
{
  "name": "Lewis Hamilton",
  "code": "HAM"
}
```

### Circuits

- `GET /api/v1/circuits` - List all circuits
- `POST /api/v1/circuits` - Create a new circuit

**Create Circuit Request:**
```json
{
  "name": "Monaco Grand Prix",
  "location": "Monte Carlo, Monaco"
}
```

### Lap Times

- `GET /api/v1/lap_times` - List all lap times (with optional filters)
  - Query parameters:
    - `driver_id` - Filter by driver ID
    - `circuit_id` - Filter by circuit ID
    - `lap_min` - Minimum lap number
    - `lap_max` - Maximum lap number
- `POST /api/v1/lap_times` - Create a new lap time
- `GET /api/v1/drivers/{driverId}/lap_times` - Get lap times for a specific driver
- `GET /api/v1/circuits/{circuitId}/lap_times` - Get lap times for a specific circuit

**Create Lap Time Request:**
```json
{
  "driver_id": 1,
  "circuit_id": 1,
  "lap_number": 1,
  "time_ms": 82345
}
```

## Testing

Run the tests:
```bash
php artisan test
```

## OpenAPI Specification

The OpenAPI specification is available in `openapi.yaml`. This spec is compatible with the Rails version and can be used to generate SDKs using Speakeasy.

## Database

By default, the application uses SQLite. The database file is created at `database/database.sqlite`.

To use a different database, update your `.env` file accordingly.

## Models

### Driver
- `id`: Integer (auto-increment)
- `name`: String
- `code`: String (indexed)
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Circuit
- `id`: Integer (auto-increment)
- `name`: String
- `location`: String
- `created_at`: Timestamp
- `updated_at`: Timestamp

### LapTime
- `id`: Integer (auto-increment)
- `driver_id`: Integer (foreign key to drivers)
- `circuit_id`: Integer (foreign key to circuits)
- `lap_number`: Integer
- `time_ms`: Integer (lap time in milliseconds)
- `created_at`: Timestamp
- `updated_at`: Timestamp

## Development

### Running Locally

```bash
php artisan serve
```

The API will be available at `http://localhost:8000`.

### Artisan Commands

Laravel provides various artisan commands for development:

```bash
# Run migrations
php artisan migrate

# Rollback migrations
php artisan migrate:rollback

# Create a new migration
php artisan make:migration create_table_name

# Create a new model
php artisan make:model ModelName

# Create a new controller
php artisan make:controller ControllerName
```

## License

This project is licensed under the MIT License.



## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
