class PlacesController < ApplicationController
  respond_to :html, :json

  def update
    logger.debug "\n\nIN places update()"
    place = current_user.places.find(params[:id])
    place.update_attributes(params[:place])
  end

  def create
    place = current_user.places.build(params[:place]);
    if place.save
      logger.debug "\n\nSuccessfully saved."
    else
      logger.debug "\n\n Error saving"
    end
  end

  def index
    logger.debug "\n\n\n-------In index of Places\n\n"
    places = current_user.places
    logger.debug "Places: " + places.to_s
    respond_with(@places = current_user.places)
  end

  def show
    @place = current_user.places.find(params[:id])
  end

end
