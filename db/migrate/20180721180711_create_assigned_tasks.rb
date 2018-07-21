class CreateAssignedTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :assigned_tasks do |t|
      t.references :assignment, foreign_key: true
      t.references :task, foreign_key: true

      t.timestamps
    end
  end
end
