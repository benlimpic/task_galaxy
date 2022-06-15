
class TasksController < ApplicationController

    def index
      render json: Task.where(project_id: params[:project_id])
    end
  
    def create
      task = Task.create!(task_params)
      
      render json: task, status: :created
  
    end
  
    def update
      task = Task.find_by(id: params[:id])
      task.update(task_params)
      render json: task
    end
  
    def destroy
      task = Task.find_by(id: params[:id])
      task.destroy
      render json: {}
    end
    private
    
    def task_params
        params.permit(:title, :description, :notes, :status, :priority, :project_id)
    end    
end
