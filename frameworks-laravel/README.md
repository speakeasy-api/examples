# F1 Race API - Laravel PHP

A Laravel PHP implementation of the Formula 1 race management API. This API provides endpoints for managing drivers, circuits.

## Overview

This is a Laravel-based F1 Race API that models real-world Formula 1 concepts: races held at circuits with drivers competing. It includes database migrations, seeders with demo data, and RESTful API endpoints following best practices like HATEOAS. The goal is to provide a simple API which can export OpenAPI specifications and be used to generate SDKs using tools like Speakeasy.

## Features

- **Drivers**: Browse F1 drivers
- **Circuits**: Browse racing circuits
- **Races**: Browse races at circuits with participating drivers
- **HATEOAS**: Hypermedia links instead of exposing raw foreign key IDs
- **Health Check**: API health and version information

## Setup

### Prerequisites

- PHP 8.2 or higher
- Composer
- SQLite

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
- **5 Races** from the 2024 season with drivers assigned to each race

This demo data makes it easy to test the API endpoints without having to create data manually.

## API Endpoints

All endpoints are prefixed with `/api`.

### Health Check

- `GET /api/health` - Get API health status

### Drivers

- `GET /api/drivers` - List all drivers
- `GET /api/drivers/{id}` - Get a single driver

### Circuits

- `GET /api/circuits` - List all circuits
- `GET /api/circuits/{id}` - Get a single circuit

### Races

- `GET /api/races` - List all races (filterable by `?circuit=X` or `?season=2024`)
- `GET /api/races/{id}` - Get a single race

## Generating API Documentation

Generate API documentation using Scribe:
```bash
php artisan scribe:generate
```

## OpenAPI

The API description is exported by [Scribe](https://scribe.knuckles.wtf/laravel/) and can be found at `frameworks-laravel/storage/app/private/scribe/openapi.yaml`.

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
