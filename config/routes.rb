Rails.application.routes.draw do
 resources :categories
 resources :rides
 resources :users
 resources :favorites

#  login route
 post '/login', to: 'sessions#create'

#  logout route
delete '/logout', to: 'sessions#destroy'

# Auto login 
get '/me', to: 'sessions#me'

end
