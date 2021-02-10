class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # helper methods for guest user:
  def create_guest
    session[:guest_user_id] = save_guest.id
  end

  def save_guest
    user = User.create(username: 'guest', password: '123456')
    user.save(validate: false)
    user
  end

  def guest_user
    User.find(session[:guest_user_id]) if session[:guest_user_id]
  end

  def guest?
    !!guest_user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
