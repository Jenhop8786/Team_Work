class AddNameToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :name, :string
  end
end
