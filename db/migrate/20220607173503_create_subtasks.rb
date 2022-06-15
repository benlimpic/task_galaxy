class CreateSubtasks < ActiveRecord::Migration[6.1]
  def change
    create_table :subtasks do |t|
      t.string :title
      t.text :description
      t.text :notes
      t.string :status
      t.string :priority


      t.belongs_to :task, null: false, foreign_key: true

      t.timestamps
    end
  end
end
