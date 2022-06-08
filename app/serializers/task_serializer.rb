class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :notes, :status, :priority, :due_date, :color, :project_id
end
