# Speakeasy Spring Boot OpenAPI Example

This example Spring Boot app demonstrates recommended practices for generating clear OpenAPI specifications and SDKs.

## Prerequisites

You need to have Java and Maven installed on your system to run this project. If you don't have these installed, you can download them from [here](https://www.oracle.com/java/technologies/downloads/) and [here](https://maven.apache.org/download.cgi).

To generate an SDK, you'll also need the Speakeasy CLI installed, or use the Speakeasy dashboard.

## Installation

1. Install all dependencies using Maven:
```bash
./mvnw clean install
```

4. [Install Speakeasy CLI](https://www.speakeasy.com/docs/speakeasy-reference/cli/getting-started):
```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Running the application

Start the server:
```bash
./mvnw spring-boot:run
```

### Working with the OpenAPI specification

Spring Boot automatically generates an OpenAPI specification. You can view it at:
- `/swagger-ui.html` - Swagger UI
- `/api-docs` - Raw OpenAPI JSON
- `/api-docs.yaml` - Raw OpenAPI YAML

To save the OpenAPI specification to a file run:

```bash
curl http://localhost:8080/api-docs.yaml -o openapi.yaml
```

To generate an SDK, run:

```bash
speakeasy quickstart
```

Follow the prompts to provide the OpenAPI document location, name the SDK, and select the SDK language.

## License

This project is licensed under the terms of the Apache 2.0 license.