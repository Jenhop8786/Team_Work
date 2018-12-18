class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    #@user = User.find(params[:id])
    @incomplete_assignments = current_user.assignments.incomplete
  end

  def show
    @user = User.find(params[:id])
    @complete_assignments = current_user.assignments.complete

    redirect_to user_path(@user)
  end

  def show_completed
    @featured_user ||= User.most_completed_assignments
    @most_completed_users = User.second_most_completed_assignments
  end
end#class
