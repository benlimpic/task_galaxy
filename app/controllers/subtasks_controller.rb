class SubtasksController < ApplicationController

    def index
        render json: Subtask.all
    end
    
    def create
        subtask = Subtask.create!(subtask_params)
        render json: subtask, status: :created
    end
    
    def update
        subtask = Subtask.find_by(id: params[:id])
        subtask.update(subtask_params)
        render json: subtask
    end
    
    def destroy
        subtask = Subtask.find_by(id: params[:id])
        subtask.destroy
        head :no_content
    end

    private
    
    def subtask_params
        params.permit(:title, :description, :notes, :status, :priority, :due_date, :color, :project_id)
    end

end


