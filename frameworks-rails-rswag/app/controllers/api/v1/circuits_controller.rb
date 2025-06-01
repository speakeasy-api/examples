# app/controllers/api/v1/circuits_controller.rb
class Api::V1::CircuitsController < ApplicationController
    def index
      render json: Circuit.all
    end
  
    def create
      circuit = Circuit.create!(circuit_params)
      render json: circuit, status: :created
    end
  
    private
  
    def circuit_params
      params.require(:circuit).permit(:name, :location)
    end
  end