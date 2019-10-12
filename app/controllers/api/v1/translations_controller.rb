class Api::V1::TranslationsController < ApplicationController

  def index
    render json: Translation.order(created_at: :desc)
  end

  def create
    @translation = Translation.create(translation_params)
    render json: @translation
  end

  def update
    @translation = Translation.find(params[:id])
    @translation.update(translation_params)
    render json: @translation
  end

  def destroy
    render json: Translation.destroy(params[:id])
  end

  private
  # Never trust parameters from the scary internet, only allow the white list through.
  def translation_params
    params.require(:translation).permit(:id, :title)
  end

end
