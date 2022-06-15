class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.text :notes
      t.string :status
      t.string :priority

      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
