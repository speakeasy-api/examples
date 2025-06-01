module Api
  module V1
    class HealthController < ApplicationController
      def show
        render json: {
          status: 'healthy',
          version: 'v1',
          timestamp: Time.current.iso8601
        }
      end
    end
  end
end 