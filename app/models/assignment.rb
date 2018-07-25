class Assignment < ApplicationRecord
  belongs_to :user
  has_many :assigned_tasks, dependent: :destroy
  has_many :tasks, through: :assigned_tasks

  validates_presence_of :name
  validates_presence_of :due_date


  def self.complete
    where(status: true).order('id DESC')
  end

  def complete?
    status
  end

  def self.incomplete
    where(status: false).order('id DESC')
  end
end
