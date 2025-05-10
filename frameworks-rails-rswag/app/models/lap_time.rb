class LapTime < ApplicationRecord
  belongs_to :driver
  belongs_to :circuit
end
