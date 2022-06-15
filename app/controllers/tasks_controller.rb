
class TasksController < ApplicationController

    def index
      render json: Task.where(user_id: session[:user_id]), includes: :project
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
