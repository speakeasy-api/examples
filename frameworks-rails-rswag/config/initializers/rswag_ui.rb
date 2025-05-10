Rswag::Ui.configure do |c|

  # List the OpenAPI endpoints that you want to be documented through the swagger-ui
  c.openapi_endpoint '/api-docs/v1/swagger.yaml', 'F1 Laps API V1'

  # Configure Swagger UI to be more user-friendly
  c.config_object['defaultModelsExpandDepth'] = 2
  c.config_object['defaultModelExpandDepth'] = 2
  c.config_object['defaultModelRendering'] = 'model'
  c.config_object['displayRequestDuration'] = true
  c.config_object['docExpansion'] = 'list'
  c.config_object['filter'] = true
  c.config_object['showExtensions'] = true
  c.config_object['showCommonExtensions'] = true
  c.config_object['tryItOutEnabled'] = true

  # Add Basic Auth in case your API is private
  # c.basic_auth_enabled = true
  # c.basic_auth_credentials 'username', 'password'
end
