class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :notes, :status, :priority, :project_id

  has_many :subtasks
end
