# FastAPI Destinations Server

A simple server implementation using FastAPI.

## Overview

This project provides an example server built with FastAPI for demonstrating SDK generation using Speakeasy. The server provides a set of API endpoints for managing travel destinations.

## Requirements

- Python 3.7+
- UV

## Installation

First, ensure you have [uv](https://github.com/astral-sh/uv) installed. If you don't have it, install it with:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Next, clone the repository:

```bash
git clone https://github.com/ritza-co/speakeasy-mocking-example-server.git

cd speakeasy-mocking-example-server
```

## Usage

1. Start the server:

    ```bash
    uv run main.py
    ```

2. Access the API documentation at:

    ```http
    http://localhost:8000/docs
    ```

## API Endpoints

### Get Destinations

```http
GET /destinations
```

Returns a list of all available destinations.

### Get Destination by ID

```http
GET /destinations/{id}
```

Returns details for a specific destination.

### Add Destination

```http
POST /destinations
```

Add a new destination to the system.

### Update Destination

```http
PUT /destinations/{id}
```

Update an existing destination.

### Delete Destination

```http
DELETE /destinations/{id}
```

Remove a destination from the system.

## Example Response

```json
{
    "id": 1,
    "name": "Paris",
    "country": "France",
    "description": "The city of love",
    "rating": 4.5
}
```
