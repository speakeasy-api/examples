require 'swagger_helper'

RSpec.describe 'Health API', type: :request do
  path '/api/v1/health' do
    get 'Get API health status' do
      tags 'Health'
      produces 'application/json'
      
      response '200', 'health status' do
        schema type: :object,
          properties: {
            status: { type: :string, enum: ['healthy'] },
            version: { type: :string },
            timestamp: { type: :string, format: 'date-time' }
          },
          required: ['status', 'version', 'timestamp']
        
        run_test!
      end
    end
  end
end 