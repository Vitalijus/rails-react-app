class Translation < ApplicationRecord
  before_create :all_downcase
  before_update :all_downcase

  def all_downcase
    self.result = title.downcase
  end
end
