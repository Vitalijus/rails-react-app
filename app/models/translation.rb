class Translation < ApplicationRecord
  before_create :translate
  before_update :translate

  def translate
    abc = ('a'..'z').to_a
    vowels = %w[a e i o u]
    consonants = abc - vowels
    result = []

    title.downcase.split(" ").map do |word|
      # translate word starting with vowel
      if vowels.include?(word[0])
        result << word + 'ay'

      # translate word starting with consonants cluster
      elsif consonants.include?(word[0]) && consonants.include?(word[1])
        result << word[2..-1] + word[0..1] + 'ay'

      # translate word starting with consonant
      elsif consonants.include?(word[0])
        result << word[1..-1] + word[0] + 'ay'

      # none of the above, return unchanged
      else
        result << word
      end

      # result
      self.result = result.join(" ")
    end
  end
end
