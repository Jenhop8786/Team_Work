class WelcomeController < ApplicationController

  def index
    @assignments = Assignment.all
    @complete_assignments = Assignment.complete
    @tasks = Task.all 
    respond_to do |format|
        format.html
        format.json {render json: @complete_assignments, layout: false}
    end
  end

  def complete
    @complete_assignments = Assignment.complete
    respond_to do |format|
        format.html
        format.json {render json: @complete_assignments, layout: false}
    end
  end

  def tasks
    @tasks = Task.all
  end
end#class
