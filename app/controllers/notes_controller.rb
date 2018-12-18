class NotesController < ApplicationController
#  before_action :require_login
  #before_action :set_note, [:show, :edit, :update, :destroy, :next, :index]


  def index
    @notes = current_user.notes 
    # respond_to do |f|
    #   f.html
    #   f.json {render json: @notes}
    # end
  end

  def show
    @note = Note.find(params[:id])
    # respond_to do |f|
    #   f.html
    #   f.json {render json: @notes}
    # end
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.create(note_params)
    @note.save

    #render json: @note, status: 200
  end

  def edit
  end

  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
    respond_to do |f|
      f.html
      f.json {render json: @note}
    end
  end

  def destroy
    @note.destroy
    redirect_to user_path(current_user.id), notice: "Note removed"
  end

   def next
     @next_note = @note.next
     render json: @next_note
   end

  private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:body, :name, :user_id)
  end



end
