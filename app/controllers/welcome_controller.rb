class WelcomeController < ApplicationController

  def index
    @assignments = Assignment.all
    @complete_assignments = Assignment.complete
    @tasks = Task.all
  end

  def complete
    @complete_assignments = Assignment.complete
  end

  def tasks
    @tasks = Task.all
  end
end#class
