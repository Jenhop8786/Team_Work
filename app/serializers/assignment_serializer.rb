class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date

  has_many :tasks
end
