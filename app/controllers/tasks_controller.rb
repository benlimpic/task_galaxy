class TasksController < ApplicationController

    def index
        render json: Task.all
    
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
        head :no_content
    end

    private
    
    def task_params
        params.permit(:title, :description, :notes, :status, :priority, :due_date, :color, :project_id)
    end    
end
