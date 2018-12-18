class Task < ApplicationRecord
  belongs_to :user
  has_many :assigned_tasks, dependent: :destroy
  has_many :assignments, through: :assigned_tasks

  validates_presence_of :name
  #validate :task_count_within_limit, :on => :create

  def completed?
    !completed_at.blank?
  end

  # def task_count_within_limit
  #   if self.user.tasks(:reload).count >= 5
  #     errors.add(:base, "Exceeded Task limit")
  #   end
  # end 
end#class
