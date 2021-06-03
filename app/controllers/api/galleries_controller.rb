class Api::GalleriesController < ApplicationController
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @galleries = Gallery.all
    render 'api/galleries/index'
  end

  def show
    @gallery = Gallery.find_by(id: params[:id])
  end

  # def create
  #   debugger
  #   @gallery = Gallery.new(gallery_params)
  #   @gallery.creator_id = current_user.id
  #   if @gallery.save
  #     render :show
  #   else
  #     render json: @gallery.errors.full_messages, status:422
  #   end
  #   debugger
  # end

  # def create
  #   debugger
  #   @gallery = Gallery.new(
  #     title: params[:gallery][:title],
  #     creator_id: params[:gallery][:creator_id])

  #   pic_ids = params[:gallery][:pic_ids]

  #   if @gallery.save! && pic_ids && !pic_ids.empty?
  #     pic_ids.each do |pic_id|
  #       pictures_to_gallery_params = {
  #         gallery_id: @gallery.id,
  #         picture_id: pic_id.to_i
  #       }
  #       PicturesToGallery.create(pictures_to_gallery_params)
  #     end
  #     render :show
  #   else
  #     render json: @gallery.errors.full_messages, status: 422
  #   end
  #   debugger
  # end

  def create
    debugger
    @gallery = Gallery.new(gallery_params)
    @gallery.creator_id = current_user.id
    if @gallery.save
      render :show
    else
      render json: @gallery.errors.full_messages, status: 422
    end
    debugger
  end

  def update
    debugger
    # @gallery = Gallery.find_by(id: params[:id])
    @gallery = Gallery.find_by(gallery_params)
    # @gallery = Gallery.find(params[:gallery][:id])
    if @gallery && @gallery.update(gallery_params)
      render :show
    else
      render json: @gallery.errors.full_messages, status: 422
    end
    debugger
  end

  def destroy
    @gallery = Gallery.find_by(id: params[:id])
    @gallery.destroy
    render 'api/galleries'
  end

  private

  def gallery_params
    params.require(:gallery).permit(:title, :creator_id)
  end
end
