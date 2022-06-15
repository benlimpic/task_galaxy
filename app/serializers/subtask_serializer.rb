class SubtaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :notes, :status, :priority, :task_id
end
