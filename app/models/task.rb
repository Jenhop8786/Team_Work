class Task < ApplicationRecord
  belongs_to :user
  has_many :assigned_tasks, dependent: :destroy
  has_many :assignments, through: :assigned_tasks

  validates_presence_of :name

  def completed?
    !completed_at.blank?
  end
end#class
