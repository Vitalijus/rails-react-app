require 'rails_helper'

RSpec.describe Translation, type: :model do
  context "translate english to pig latin" do

    it "adding 'ay' for word starting with vowel" do
      expect(Translation.new(title: "assessment").translate).to eq(["assessmentay"])
    end

    it "adding 'ay' for words starting with consonants cluster" do
      expect(Translation.new(title: "schedule").translate).to eq(["hedulescay"])
    end

    it "adding 'ay' for words starting with consonants" do
      expect(Translation.new(title: "risk").translate).to eq(["iskray"])
    end

    it "not starting with a vowel, consonant or consonants cluster" do
      expect(Translation.new(title: "_risk").translate).to eq(["_risk"])
    end
  end
end
