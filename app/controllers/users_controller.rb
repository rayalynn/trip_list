class UsersController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@users = User.all)
  end

  def show
    @user = User.find_by_username(params[:id].downcase)
  end
end
