class AddResultToTranslations < ActiveRecord::Migration[5.1]
  def change
    add_column :translations, :result, :string
  end
end
