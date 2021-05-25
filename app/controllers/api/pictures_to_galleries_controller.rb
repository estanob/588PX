class Api::PicturesToGalleriesController < ApplicationController
  def create
    # @pictures_to_gallery = PicturesToGallery.new(
    #   picture_id: params[:pictures_to_gallery][:picture_id],
    #   gallery_id: params[:pictures_to_gallery][:gallery_id]
    # )
    @pictures_to_gallery = PicturesToGallery.new(pictures_to_gallery_params)
    if @pictures_to_gallery && @pictures_to_gallery.save
      render :show
    else
      render json: @pictures_to_gallery.errors.full_messages, status: 422
    end
  end

  def index
    @pictures_to_galleries = PicturesToGallery.all
    render :index
  end

  def show
    @pictures_to_gallery = PicturesToGallery.find_by(id: params[:id])
    render :show
  end

  def destroy
    @pictures_to_gallery = PicturesToGallery.find_by(id: params[:id])
    @pictures_to_gallery.destroy
    render :index
  end

  private

  def pictures_to_gallery_params
    params.require(:pictures_to_gallery).permit(:picture_id, :gallery_id)
  end
end
