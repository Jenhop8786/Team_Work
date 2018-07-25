class AddToUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :assignments_count, :integer, :default => 0, :null => false
    add_column :users, :assignments_count, :integer, :default => 0, :null => false

     User.reset_column_information

     User.all.each do |u|
     User.update_counters u.id, :assignments_count => u.assignments.length
   end
  end
end
