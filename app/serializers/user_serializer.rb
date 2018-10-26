class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name

  has_many :assignments
  has_many :tasks through: :assignments 
end
