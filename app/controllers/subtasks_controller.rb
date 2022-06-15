class SubtasksController < ApplicationController

    def index
      render json: Subtask.where(user_id: session[:user_id]), includes: :task
    end
  
    def create
      Subtask = Subtask.create!(Subtask_params)
      
      render json: Subtask, status: :created
  
    end
  
    def update
      Subtask = Subtask.find_by(id: params[:id])
      Subtask.update(Subtask_params)
      render json: Subtask
    end
  
    def destroy
      Subtask = Subtask.find_by(id: params[:id])
      Subtask.destroy
      render json: {}
    end
    private
    
    def Subtask_params
        params.permit(:title, :description, :notes, :status, :priority, :task_id)
    end    
end


