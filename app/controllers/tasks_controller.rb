class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_assignment
  before_action :set_task, except: [:create, :index]

 def new
   @task = Task.new # for form in Assignment
 end

  def index
    @assignment = Assignment.find(params[:assignment_id])
    @tasks = Task.all
    render json: @tasks, layout: false
  end#index

  def show
  #  @assignments = Assignment.find(params[:assignment_id])
    @task = Task.find(params[:id])
    respond_to do |format|
      render format.html {render :show }
      render format.json { render @task, layout: false }
    end
  end#show

  def create
   @task = Task.create(task_params)
   render :json => @task, layout: false
end

  def destroy
    @task = @assignment.tasks.find(params[:id])
    if @task.destroy
      flash[:success] = "Task was deleted successfully!"
    else
      flash[:error] = "Task could not be deleted"
    end
      redirect_to [current_user, @assignment], notice: "Task deleted"
  end#destroy

  def complete
    if !@task.completed?
      @task.update_attribute(:completed_at, Time.now)

      redirect_to [current_user, @assignment], notice: "Task Completed"
    else

    @task.update_attribute(:completed_at, nil)
     redirect_to [current_user, @assignment], notice: "Task Incomplete"
    end
  end#complete

  private

  def set_assignment
    @assignment = Assignment.find(params[:assignment_id])
  end

  def set_task
    @task = @assignment.tasks.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name, :completed)
  end
end#class
