class SubtaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :notes, :status, :priority, :due_date, :color, :task_id
end
