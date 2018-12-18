class Note < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, presence: true
  validates_presence_of :body, presence: true 
end
