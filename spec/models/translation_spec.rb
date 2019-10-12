require 'rails_helper'

RSpec.describe Translation, type: :model do
  context "translate english to pig latin" do
    pig_latin = Translation.new

    it "returns error message when no input" do
      expect(pig_latin.translate(nil)).to eq("undefined")
    end

    it "adding 'ay' for word starting with vowel" do
      expect(pig_latin.translate("assessment")).to eq(["assessmentay"])
    end

    it "adding 'ay' for words starting with consonants cluster" do
      expect(pig_latin.translate("schedule")).to eq(["hedulescay"])
    end

    it "adding 'ay' for words starting with consonants" do
      expect(pig_latin.translate("risk")).to eq(["iskray"])
    end

    it "not starting with a vowel, consonant or consonants cluster" do
      expect(pig_latin.translate("_risk")).to eq(["_risk"])
    end
  end
end
