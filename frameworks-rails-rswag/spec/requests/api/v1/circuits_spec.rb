require 'swagger_helper'

RSpec.describe 'Circuits API', type: :request do
  path '/api/v1/circuits' do
    get 'List all circuits' do
      tags 'Circuits'
      produces 'application/json'
      
      response '200', 'circuits found' do
        schema type: :array,
          items: {
            type: :object,
            properties: {
              id: { type: :integer },
              name: { type: :string },
              location: { type: :string },
              created_at: { type: :string, format: 'date-time' },
              updated_at: { type: :string, format: 'date-time' }
            },
            required: ['id', 'name', 'location']
          }
        
        run_test!
      end
    end

    post 'Create a circuit' do
      tags 'Circuits'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :circuit, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          location: { type: :string }
        },
        required: ['name', 'location']
      }
      
      response '201', 'circuit created' do
        let(:circuit) { { name: 'Silverstone', location: 'United Kingdom' } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:circuit) { { name: 'Silverstone' } }
        run_test!
      end
    end
  end
end 