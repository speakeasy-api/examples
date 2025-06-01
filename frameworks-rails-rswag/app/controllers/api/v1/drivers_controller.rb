# app/controllers/api/v1/drivers_controller.rb
class Api::V1::DriversController < ApplicationController
    def index
      render json: Driver.all
    end
  
    def create
      driver = Driver.create!(driver_params)
      render json: driver, status: :created
    end
  
    private
  
    def driver_params
      params.require(:driver).permit(:name, :code)
    end
  end