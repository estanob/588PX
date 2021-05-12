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
    @follow = Follow.where(followee_id: params[:id]).where(user_id: current_user.id)[0]
    @follow.destroy
    render :show
  end

  private
  def follow_params
    params.permit(:user_id, :followee_id)
  end
end
