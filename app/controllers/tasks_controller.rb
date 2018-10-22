class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_assignment
  before_action :set_task, except: [:create, :index]

 def new
   @task = Task.new
 end

  def index
    @assignment = Assignment.find(params[:assignment_id])
    @tasks = @assignment.tasks
    respond_to do |format|
      format.html {render 'tasks/index', :layout => false}
      format.json {render :json => @tasks, :layout => false}
    end
  end#index

  def show
  #  @assignments = Assignment.find(params[:assignment_id])
    @task = Task.find(params[:id])
    #redirect_to :controller => 'assignments', :action => 'show'
    respond_to do|format|
      format.html {render :show}
      format.json {render json: @assignment, status: 200}
    end
  end#show

  def create
    @task = Task.create(task_params)
    @task.user_id = current_user.id
     if @task.save
      @assignment.tasks << @task
    respond_to do |format|
      format.html {redirect_to @assignment}
      format.json {render :json => @task}
     end
   else
     redirect_to [current_user, @assignment], notice: "Task could not be created"
  end
  end

  def destroy
    @task = @assignment.tasks.find(params[:id])
    if @task.destroy
      flash[:success] = "Task was deleted successfully!"
    else
      flash[:error] = "Task could not be deleted"
    end
      redirect_to [current_user, assignments: :show ], notice: "Task deleted"
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
    params.require(:task).permit(:name, :completed, :assignment_id, :user_id)
  end
end#class
