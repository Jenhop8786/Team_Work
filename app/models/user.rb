class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:facebook]

  validates_presence_of :email, uniqueness: true

  scope :most_completed_assignments, -> { order(assignments_completed_count: :desc).first }
  scope :second_most_completed_assignments, -> { order(assignments_completed_count: :desc).all[1..-1] }
  has_many :assignments
  has_many :assignments_completed, -> { complete }, class_name: "Assignment"
  has_many :tasks, through: :assignments

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    user.email = auth.info.email
    user.password = Devise.friendly_token[0,20]
    end
  end
 end
