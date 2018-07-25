class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_assignment
  before_action :set_task, except: [:create, :index]

  def index
    @tasks = Task.all
  end

  def create
    @task = @assignment.tasks.build(task_params)
    @task.user_id = current_user.id
    if @task.save
      @assignment.tasks << @task
    end

    redirect_to [current_user, @assignment]
  end#create

    def show
       @assignments = Assignment.find(params[:assignment_id])
       @task = Task.find(params[:id])
     end#show

  def destroy
    @task = @assignment.tasks.find(params[:id])
    if @task.destroy
      flash[:success] = "Task was deleted successfully!"
    else
      flash[:error] = "Task could not be deleted"
    end
      redirect_to [current_user, @assignment], notice: "Task deleted"
  end #destroy

  def complete
    if !@task.completed?
      @task.update_attribute(:completed_at, Time.now)

      redirect_to [current_user, @assignment], notice: "Task Completed"
    else

    @task.update_attribute(:completed_at, nil)
     redirect_to [current_user, @assignment], notice: "Task Incomplete"
    end
  end

  private

  def set_assignment
    @assignment = Assignment.find(params[:assignment_id])
  end

  def set_task
    @task = @assignment.tasks.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name)
  end
end#class
