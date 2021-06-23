class Api::PictureLikesController < ApplicationController
  def create
    debugger
    @picture_like = PictureLike.new(
    liker_id: params[:picture_like][:liker_id],
    picture_id: params[:picture_like][:picture_id]
    )
    @picture_like.liker_id = current_user.id

    if @picture_like && @picture_like.save
      render :show
    else
      render json: @picture_like.errors.full_messages, status: 422
    end
    debugger
  end

  def index
    @picture_likes = PictureLike.all
    render :index
  end

  def show
    @picture_like = PictureLike.find_by(id: params[:id])
    render :show
  end
  
  def destroy
    debugger
    @picture_like = PictureLike.find_by(delete_params)
    @picture_like.destroy
    render :show
    debugger
  end

  private
  
  def delete_params
    params.except(:picture_like, :format).permit(:id, :liker_id, :picture_id)
  end
end
