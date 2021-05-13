class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(
      user_id: params[:follow][:user_id], 
      followee_id: params[:follow][:followee_id]
    )
    @follow.user_id = current_user.id

    if @follow && @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
    debugger
  end

  def index
    debugger
    @follows = Follow.all
    render :index
  end

  def show
    @follow = Follow.find_by(id: params[:id])
    render :show
  end

  def destroy
    debugger
    @follow = Follow.find_by(delete_params)
    @follow.destroy
    render :show
  end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :followee_id)
  end

  def delete_params
    params.except(:follow, :format).permit(:id, :user_id, :followee_id)
  end
end
