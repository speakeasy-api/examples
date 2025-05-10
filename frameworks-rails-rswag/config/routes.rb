Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  
  # health check at /
  root to: proc { [200, { "Content-Type" => "application/json" }, [ { status: "ok" }.to_json ]] }

  namespace :api do
    namespace :v1 do
      # lap times
      get  "lap_times",                     to: "lap_times#index"
      post "lap_times",                     to: "lap_times#create"
      get  "drivers/:driver_id/lap_times",  to: "lap_times#by_driver"
      get  "circuits/:circuit_id/lap_times",to: "lap_times#by_circuit"

      # drivers
      get  "drivers", to: "drivers#index"
      post "drivers", to: "drivers#create"

      # circuits
      get  "circuits", to: "circuits#index"
      post "circuits", to: "circuits#create"

      resource :health, only: [:show], controller: 'health'
    end
  end
end
