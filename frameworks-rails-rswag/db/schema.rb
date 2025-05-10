# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_05_06_194158) do
  create_table "circuits", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["code"], name: "index_drivers_on_code"
  end

  create_table "lap_times", force: :cascade do |t|
    t.integer "driver_id", null: false
    t.integer "circuit_id", null: false
    t.integer "lap_number"
    t.integer "time_ms"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["circuit_id"], name: "index_lap_times_on_circuit_id"
    t.index ["driver_id"], name: "index_lap_times_on_driver_id"
  end

  add_foreign_key "lap_times", "circuits"
  add_foreign_key "lap_times", "drivers"
end
