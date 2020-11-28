Rails.application.routes.draw do

  # search route
  get "/booking-history", to: "bookings#search"

  resources :bookings
  get "/bookings", to: "bookings#index"
  post "/book-ticket", to: "bookings#create"

  # search route
  get "/travel-information/search", to: "travel_informations#search"

  # travel info routes
  resources :travel_informations
  get "/travel-information", to: "travel_informations#index"
  post "/new-travel-information", to: "travel_informations#create"
  put "/travel_informations/:id", to: "travel_informations#update"
  delete "/travel_informations/:id", to: "travel_informations#destroy"

  # users route
  resource :users, only: [:create]
   post "/login", to: "auth#login"
   get "/auto_login", to: "auth#auto_login"
   get "/user_is_authed", to: "auth#user_is_authed"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
