class PicturesController < ApplicationController
  def show
    @picture = Picture.find(params[:id])
    render :show
  end
end