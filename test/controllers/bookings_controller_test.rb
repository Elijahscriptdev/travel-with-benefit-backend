require 'test_helper'

class BookingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @booking = bookings(:one)
  end

  test 'should get index' do
    get bookings_url, as: :json
    assert_response :success
  end

  test 'should create booking' do
    assert_difference('Booking.count') do
      post bookings_url, params: { booking: { booking_ref: @booking.booking_ref, bus_company: @booking.bus_company, bus_type: @booking.bus_type, email: @booking.email, first_name: @booking.first_name, last_name: @booking.last_name, seats: @booking.seats, total_price: @booking.total_price, travel_date: @booking.travel_date, travel_time: @booking.travel_time, unit_price: @booking.unit_price, user_id: @booking.user_id } }, as: :json
    end

    assert_response 201
  end

  test 'should show booking' do
    get booking_url(@booking), as: :json
    assert_response :success
  end

  test 'should update booking' do
    patch booking_url(@booking), params: { booking: { booking_ref: @booking.booking_ref, bus_company: @booking.bus_company, bus_type: @booking.bus_type, email: @booking.email, first_name: @booking.first_name, last_name: @booking.last_name, seats: @booking.seats, total_price: @booking.total_price, travel_date: @booking.travel_date, travel_time: @booking.travel_time, unit_price: @booking.unit_price, user_id: @booking.user_id } }, as: :json
    assert_response 200
  end

  test 'should destroy booking' do
    assert_difference('Booking.count', -1) do
      delete booking_url(@booking), as: :json
    end

    assert_response 204
  end
end
