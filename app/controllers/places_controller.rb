class PlacesController < ApplicationController
  respond_to :html, :json

  def update
    place = current_user.places.find(params[:id])
    place.update_attributes(params[:place])
    respond_with(place);
  end

end
