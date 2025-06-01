require 'swagger_helper'

RSpec.describe 'Lap Times API', type: :request do
  path '/api/v1/lap_times' do
    get 'List all lap times' do
      tags 'Lap Times'
      produces 'application/json'
      
      parameter name: :driver_id, in: :query, type: :integer, required: false, description: 'Filter by driver ID'
      parameter name: :circuit_id, in: :query, type: :integer, required: false, description: 'Filter by circuit ID'
      parameter name: :lap_min, in: :query, type: :integer, required: false, description: 'Minimum lap number'
      parameter name: :lap_max, in: :query, type: :integer, required: false, description: 'Maximum lap number'
      
      response '200', 'lap times found' do
        schema type: :array,
          items: {
            type: :object,
            properties: {
              id: { type: :integer },
              driver_id: { type: :integer },
              circuit_id: { type: :integer },
              time_ms: { type: :integer },
              lap_number: { type: :integer },
              created_at: { type: :string, format: 'date-time' },
              updated_at: { type: :string, format: 'date-time' }
            },
            required: ['id', 'driver_id', 'circuit_id', 'time_ms', 'lap_number']
          }
        
        run_test!
      end
    end

    post 'Create a lap time' do
      tags 'Lap Times'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :lap_time, in: :body, schema: {
        type: :object,
        properties: {
          driver_id: { type: :integer },
          circuit_id: { type: :integer },
          time_ms: { type: :integer },
          lap_number: { type: :integer }
        },
        required: ['driver_id', 'circuit_id', 'time_ms', 'lap_number']
      }
      
      response '201', 'lap time created' do
        let(:lap_time) { { driver_id: 1, circuit_id: 1, time_ms: 80000, lap_number: 1 } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:lap_time) { { driver_id: 1 } }
        run_test!
      end
    end
  end

  path '/api/v1/drivers/{driver_id}/lap_times' do
    get 'Get lap times for a specific driver' do
      tags 'Lap Times'
      produces 'application/json'
      
      parameter name: :driver_id, in: :path, type: :integer, required: true
      
      response '200', 'lap times found' do
        let(:driver_id) { 1 }
        schema type: :array,
          items: {
            type: :object,
            properties: {
              id: { type: :integer },
              circuit_id: { type: :integer },
              time_ms: { type: :integer },
              lap_number: { type: :integer },
              created_at: { type: :string, format: 'date-time' },
              updated_at: { type: :string, format: 'date-time' }
            }
          }
        run_test!
      end
    end
  end

  path '/api/v1/circuits/{circuit_id}/lap_times' do
    get 'Get lap times for a specific circuit' do
      tags 'Lap Times'
      produces 'application/json'
      
      parameter name: :circuit_id, in: :path, type: :integer, required: true
      
      response '200', 'lap times found' do
        let(:circuit_id) { 1 }
        schema type: :array,
          items: {
            type: :object,
            properties: {
              id: { type: :integer },
              driver_id: { type: :integer },
              time_ms: { type: :integer },
              lap_number: { type: :integer },
              created_at: { type: :string, format: 'date-time' },
              updated_at: { type: :string, format: 'date-time' }
            }
          }
        run_test!
      end
    end
  end
end 