class SubtasksController < ApplicationController

    def index
      render json: Subtask.where(task_id: params[:task_id])
    end
  
    def show
      subtask = Subtask.where(task_id: params[:task_id])
      render json: subtask.find(params[:id])
    end

    def create
      subtask = Subtask.create!(subtask_params)
      
      render json: subtask, status: :created
  
    end
  
    def update
      subtask = Subtask.find_by(id: params[:id])
      subtask.update(subtask_params)
      render json: Subtask
    end
  
    def destroy
      subtask = Subtask.find_by(id: params[:id])
      subtask.destroy
      render json: {}
    end
    private
    
    def Subtask_params
        params.permit(:title, :description, :notes, :status, :priority, :task_id)
    end    
end


