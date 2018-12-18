class NoteSerializer < ActiveModel::Serializer
  attributes :id, :name, :body

  belongs_to :user 
end
