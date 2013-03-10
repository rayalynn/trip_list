class PlacesController < ApplicationController
  respond_to :html, :json

  def update
    logger.debug "\n\nIN places update()"
    place = current_user.places.find(params[:id])
    place.update_attributes(params[:place])
    #respond_with(place);
  end

  def create
    place = current_user.places.build(params[:place]);
    if place.save
      logger.debug "\n\nSuccessfully saved."
    else
      logger.debug "\n\n Error saving"
    end
  end

end
