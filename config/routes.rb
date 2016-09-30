Rails.application.routes.draw do
<<<<<<< HEAD
	resources :articles do
  	  resources :comments
  	end
	root 'home#home'
  	get '/home' => 'home#home'
  	get '/home/map' => 'home#map'
  	get '/game' => 'game#game'
=======
	resources :articles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#home'
  get '/home' => 'home#home'
  get '/home/map' => 'home#map'
  get '/game' => 'game#game'
>>>>>>> js
end
