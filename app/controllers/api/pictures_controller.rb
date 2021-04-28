class Api::PicturesController < ApplicationController
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @pictures = Picture.all
    render :index
  end

  def show 
    @picture = Picture.find_by(id: params[:id])
    render :show
  end

  def create
    debugger
    @picture = Picture.new(picture_params)
    @picture.uploader_id = current_user.id
    if @picture && @picture.save
      render :show
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def update
    @picture = Picture.find(params[:picture][:id])
    if @picture && @picture.update(picture_params)
      render :show
      # render 'api/pictures/show'
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def destroy
    @picture = Picture.find_by(id: params[:id])
    @picture.destroy
    render 'api/pictures7'
    # if @picture.uploader_id == current_user.id
    #   @picture.destroy
    #   render 'api/posts/show'
    # end
  end

  private

  def picture_params
    params.require(:picture).permit(:title, :location, :caption, :photo)
  end
end
