class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :notes, :status, :priority, :due_date, :color, :user_id
end
