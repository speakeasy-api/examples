# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)


# sample data for the database
max = Driver.create!(name: "Max Verstappen", code: "VER")
lec = Driver.create!(name: "Charles Leclerc", code: "LEC")

spa    = Circuit.create!(name: "Spa-Francorchamps", location: "Belgium")
monza  = Circuit.create!(name: "Monza",              location: "Italy")
monaco = Circuit.create!(name: "Monaco",             location: "Monaco")

10.times do |lap|
  LapTime.create!(driver: max, circuit: spa,    lap_number: lap + 1, time_ms: rand(90_000..105_000))
  LapTime.create!(driver: lec, circuit: spa,  lap_number: lap + 1, time_ms: rand(90_000..105_000))

  LapTime.create!(driver: max, circuit: monaco, lap_number: lap + 1, time_ms: rand(90_000..105_000))

  LapTime.create!(driver: lec, circuit: monaco, lap_number: lap + 1, time_ms: rand(90_000..105_000))

  LapTime.create!(driver: max, circuit: monza,  lap_number: lap + 1, time_ms: rand(90_000..105_000))
  LapTime.create!(driver: lec, circuit: monza,  lap_number: lap + 1, time_ms: rand(90_000..105_000))
end