class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :notes, :status, :priority, :user_id

  has_many :tasks
end
