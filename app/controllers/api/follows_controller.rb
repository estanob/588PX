class Api::FollowsController < ApplicationController
  def create
    debugger
    @follow = Follow.new(follow_params)
    # @follow = Follow.new(
      # user_id: params[:follow][:user_id], 
      # followee_id: params[:follow][:followee_id]
    # )
    @follow.user_id = current_user.id

    if @follow && @follow.save
      debugger
      render :show
    else
      debugger
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @follows = Follow.all
    render :index
  end

  def show
    @follow = Follow.find_by(id: params[:id])
    render :show
  end

  def destroy
    @follow = Follow.find_by(delete_params)
    @follow.destroy
    render :show
  end

  private
  
  def follow_params
    params.except(:follow, :format).permit(:user_id, :followee_id)
  end
  
  def delete_params
    params.except(:follow, :format).permit(:id, :user_id, :followee_id)
  end
end
