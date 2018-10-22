class AssignmentsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_assignment, only: [:show, :edit, :update, :destroy]

  def new
    @assignment = current_user.assignments.build
    @assignment.tasks.build
  end#new

  #GET/ASSIGNMENTS
  def index
      user = User.find params[:user_id]
      @assignment = Assignment.new # for the form in the index page
      @assignment.tasks.build # for the form in the index page

      @incomplete_assignments = user.assignments.incomplete
      @complete_assignments = user.assignments.complete
  end#index

  #POST
  def create
    @assignment = current_user.assignments.build(assignment_params)
     if @assignment.save
       redirect_to [current_user, @assignment], notice: "Assignment was created successfully!"
     else
       render :new
     end
   end #create

   def show
     @assignment = Assignment.find(params[:id])
     @task = Task.new
     @tasks = @assignment.tasks
   end#show

#PATCH
   def edit
   end

  def update
    @assignment.update(assignment_params)

    redirect_to [current_user, @assignment], notice: "Assignment updated successfully!"
  end#update

 #DELETE
  def destroy
    @assignment.destroy

    redirect_to [current_user, @assignment], notice: "Assignment was deleted successfully!"
  end #destroy

  def completed
    #binding.pry
     Assignment.where(id: params[:assignment_ids]).update_all(status: true)
     current_user.assignments_completed_count +=(params[:assignment_ids].count)
     current_user.save

     redirect_to user_assignments_path(current_user.id)
  end#completed

   private
#STRONG PARAMS
   def set_assignment
     @assignment = Assignment.find(params[:id])
   end

   def assignment_params
     params.require(:assignment).permit(:name, :due_date, task_attributes: [:name])
   end

end#class
