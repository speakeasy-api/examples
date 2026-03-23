# F1 Laps API Documentation Guide

## Overview

The F1 Laps API provides access to Formula 1 lap time data and analytics. This guide covers the API documentation using RSwag, which generates OpenAPI (Swagger) specifications from RSpec tests.

## Setup

### 1. Dependencies

Run:

```bash
bundle install
```

### 2. Installation

Run the following generators in order:
```bash
rails generate rswag:api:install
rails generate rswag:ui:install
rails generate rswag:specs:install
```

This creates:
- `config/initializers/rswag_api.rb`
- `config/initializers/rswag_ui.rb`
- `spec/swagger_helper.rb`
- Mounts RSwag in `config/routes.rb`

### 3. Configuration

The API is configured in three main files:

1. **swagger_helper.rb**:
```ruby
RSpec.configure do |config|
  config.openapi_root = Rails.root.join('openapi').to_s
  config.openapi_specs = {
    'v1/openapi.yaml' => {
      openapi: '3.0.1',
      info: {
        title: 'F1 Laps API',
        version: 'v1',
        description: 'API for accessing Formula 1 lap time data and analytics'
      },
      paths: {},
      servers: [
        {
          url: 'http://{defaultHost}',
          variables: {
            defaultHost: {
              default: 'localhost:3000'
            }
          }
        }
      ]
    }
  }
  config.openapi_format = :yaml
end
```

2. **rswag_ui.rb**:
```ruby
Rswag::Ui.configure do |c|
  c.openapi_endpoint '/api-docs/v1/swagger.yaml', 'API V1 Docs'
end
```

3. **rswag_api.rb**:
```ruby
Rswag::Api.configure do |c|
  c.openapi_root = Rails.root.join('swagger').to_s
end
```

## API Endpoints

### Health Check
- `GET /api/v1/health`
  - Returns API health status
  - Response: `{ status: "healthy", version: "v1", timestamp: "..." }`

### Lap Times
- `GET /api/v1/lap_times`
  - List all lap times
  - Query Parameters:
    - `driver_id` (optional): Filter by driver
    - `circuit_id` (optional): Filter by circuit
    - `lap_min` (optional): Minimum lap number
    - `lap_max` (optional): Maximum lap number

- `POST /api/v1/lap_times`
  - Create a new lap time
  - Required fields: `driver_id`, `circuit_id`, `time_ms`, `lap_number`

- `GET /api/v1/drivers/{driver_id}/lap_times`
  - Get lap times for a specific driver

- `GET /api/v1/circuits/{circuit_id}/lap_times`
  - Get lap times for a specific circuit

### Drivers
- `GET /api/v1/drivers`
  - List all drivers

- `POST /api/v1/drivers`
  - Create a new driver
  - Required fields: `name`, `code`

### Circuits
- `GET /api/v1/circuits`
  - List all circuits

- `POST /api/v1/circuits`
  - Create a new circuit
  - Required fields: `name`, `location`

## Testing & Documentation Generation

1. Write tests in `spec/requests/api/v1/` following RSwag conventions
2. Generate documentation:
   ```bash
   RAILS_ENV=test rake rswag:specs:swaggerize
   ```
3. Documentation is generated to `openapi/v1/openapi.yaml`

## Viewing Documentation

1. Start the Rails server:
   ```bash
   rails server
   ```

2. Visit http://localhost:3000/api-docs

The Swagger UI provides:
- Interactive API documentation
- Request/response schemas
- Test endpoints directly in the browser
- Example requests and responses


