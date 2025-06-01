class CreateDrivers < ActiveRecord::Migration[8.0]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :code

      t.timestamps
    end
    add_index :drivers, :code
  end
end
