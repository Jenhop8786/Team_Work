class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :user, serializer: TaskUserSerializer 
end
