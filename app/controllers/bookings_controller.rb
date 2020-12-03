class BookingsController < ApplicationController
  before_action :set_booking, only: %i[show update destroy]
  skip_before_action :require_login, only: %i[index search show create]

  # GET /bookings
  def index
    @bookings = Booking.all

    render json: @bookings
  end

  def search
    @bookings = Booking.where(email: params[:email])
    render json: @bookings
  end

  # GET /bookings/1
  def show
    render json: @booking
  end

  # POST /bookings
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: @booking, status: :created, location: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_booking
    @booking = Booking.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def booking_params
    params.permit(:first_name, :last_name, :email, :seats, :price, :total_price, :booking_ref, :travel_date, :travel_time, :departure, :destination, :bus_type, :bus_company)
  end
end
