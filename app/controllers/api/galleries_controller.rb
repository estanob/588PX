class Api::GalleriesController < ApplicationController
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @galleries = Gallery.all
    render 'api/galleries/index'
  end

  def show
    @gallery = Gallery.find_by(id: params[:id])
  end

  def create
    @gallery = Gallery.new(gallery_params)
    @gallery.creator_id = current_user.id
    if @gallery && @gallery.save
      render :show
    else
      render json: @gallery.errors.full_messages, status:422
    end
  end

  def update
    @gallery = Gallery.find_by(id: params[:gallery][:id])
    if @gallery.creator_id == current_user.id && @gallery && @gallery.update(gallery_params)
      render 'api/galleries/show'
    end
  end

  def destroy
    @gallery = Gallery.find_by(id: params[:id])
    if @gallery.creator_id == current_user.id
      @gallery.destroy
      render 'api/galleries/show'
    end
  end

  private

  def gallery_params
    params.require(:gallery).permit(:id, :title, :creator_id)
  end
end
