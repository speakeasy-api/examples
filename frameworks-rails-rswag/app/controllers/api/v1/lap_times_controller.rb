# app/controllers/api/v1/lap_times_controller.rb
class Api::V1::LapTimesController < ApplicationController
    def index
      laps = LapTime.all
      laps = laps.where(driver_id: params[:driver_id])   if params[:driver_id]
      laps = laps.where(circuit_id: params[:circuit_id]) if params[:circuit_id]
      laps = laps.where("lap_number >= ?", params[:lap_min]) if params[:lap_min]
      laps = laps.where("lap_number <= ?", params[:lap_max]) if params[:lap_max]
      render json: laps
    end
  
    def by_driver
      render json: LapTime.where(driver_id: params[:driver_id])
    end
  
    def by_circuit
      render json: LapTime.where(circuit_id: params[:circuit_id])
    end
  
    def create
      lap = LapTime.create!(lap_params)
      render json: lap, status: :created
    end
  
    private
  
    def lap_params
      params.require(:lap_time).permit(:driver_id, :circuit_id, :lap_number, :time_ms)
    end
  end