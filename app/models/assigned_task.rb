class AssignedTask < ApplicationRecord
  belongs_to :assignment
  belongs_to :task
end
