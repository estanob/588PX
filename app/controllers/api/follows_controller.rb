class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id

    if @follow && @follow.save
      render :show
    else
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
    @follow = Follow.find_by(follow_params)
    @follow.destroy
    render :show
  end

  private
  def follow_params
    params.permit(:user_id, :followee_id)
  end
end
