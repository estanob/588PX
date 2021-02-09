class Api::PicturesController < ApplicationController
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @pictures = Picture.all
    render 'api/pictures/index'
  end

  def show 
    @picture = Picture.find_by(id: params[:id])
  end

  def create
    @picture = Picture.new(picture_params)
    if @picture && @picture.save
      render 'api/pictures/show'
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def update
    @picture = Picture.find_by(id: params[:picture][:id])
    if @picture.uploader_id == current_user.id && @picture && @picture.update(picture_params)
      render 'api/pictures/show'
    end
  end

  def destroy
    @picture = Picture.find_by(id: params[:id])
    if @picture.uploader_id == current_user.id
      @picture.destroy
      render 'api/posts/show'
    end
  end

  private

  def picture_params
    params.require(:picture).permit(:id, :title, :location, :caption, :uploader_id)
  end
end
