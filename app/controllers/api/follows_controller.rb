class Api::FollowsController < ApplicationController
  def create
    debugger
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id

    if @follow.save
      # render :show
      render 'api/users/show'
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
    @follow = Follow.find_by(id: params[:id])
    @follow.destroy
    render 'api/follows'
  end

  private
  def follow_params
    params.permit(:followee_id)
    # params.require(:follow).permit(:followee_id)
  end
end
