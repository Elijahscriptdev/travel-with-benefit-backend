require 'test_helper'

class TravelInformationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @travel_information = travel_informations(:one)
  end

  test 'should get index' do
    get travel_informations_url, as: :json
    assert_response :success
  end

  test 'should create travel_information' do
    assert_difference('TravelInformation.count') do
      post travel_informations_url, params: { travel_information: {
        bus_company: @travel_information.bus_company,
        bus_type: @travel_information.bus_type,
        departure: @travel_information.departure,
        estination: @travel_information.destination,
        price: @travel_information.price,
        travel_date: @travel_information.travel_date,
        travel_time: @travel_information.travel_time
      } }, as: :json
    end

    assert_response 201
  end

  test 'should show travel_information' do
    get travel_information_url(@travel_information), as: :json
    assert_response :success
  end

  test 'should update travel_information' do
    patch travel_information_url(@travel_information), params: {
      travel_information: { bus_company: @travel_information.bus_company,
                            bus_type: @travel_information.bus_type, departure: @travel_information.departure,
                            destination: @travel_information.destination, price: @travel_information.price,
                            travel_date: @travel_information.travel_date,
                            travel_time: @travel_information.travel_time }
    }, as: :json
    assert_response 200
  end

  test 'should destroy travel_information' do
    assert_difference('TravelInformation.count', -1) do
      delete travel_information_url(@travel_information), as: :json
    end

    assert_response 204
  end
end
