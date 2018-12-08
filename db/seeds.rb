# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Assignment.create(
  #8
  :name => "Dribble with right hand full court",
  :due_date => "Tournament Friday",
  :user_id => 1
)

Task.create(
  :name => "dribble full court with right hand 1 minute",
  :completed_at => "nil",
  :user_id => 1,
  :assignment_id => 8
)
