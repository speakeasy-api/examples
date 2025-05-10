require 'swagger_helper'

RSpec.describe 'Drivers API', type: :request do
  path '/api/v1/drivers' do
    get 'List all drivers' do
      tags 'Drivers'
      produces 'application/json'
      
      response '200', 'drivers found' do
        schema type: :array,
          items: {
            type: :object,
            properties: {
              id: { type: :integer },
              name: { type: :string },
              code: { type: :string },
              created_at: { type: :string, format: 'date-time' },
              updated_at: { type: :string, format: 'date-time' }
            },
            required: ['id', 'name', 'code']
          }
        
        run_test!
      end
    end

    post 'Create a driver' do
      tags 'Drivers'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :driver, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          code: { type: :string }
        },
        required: ['name', 'code']
      }
      
      response '201', 'driver created' do
        let(:driver) { { name: 'Max Verstappen', code: 'VER' } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:driver) { { name: 'Max Verstappen' } }
        run_test!
      end
    end
  end
end 