class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find(params[:id])
    @assignment = Assignment.new

    redirect_to user_path(@user)
  end

  def show_completed
    @users = User.all
  end

end
