class PinsController < ApplicationController

	def index
		@pins = Pin.all
		respond_to do |format|
      format.html
      format.json { render json: @pins }
    end
	end

	def create
		@pin = Pin.new(pin_params)

		if @pin.save
      respond_to do |format|
        format.html
        format.json { render json: @pin }
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render status: 400, nothing: true }
      end
    end
	end

	private
	def pin_params
		params.require(:pin).permit(:longitude, :latitude)
	end

end