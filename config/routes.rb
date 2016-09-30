Rails.application.routes.draw do
	resources :articles do
  	  resources :comments
  	end
	root 'home#home'
  	get '/home' => 'home#home'
  	get '/home/map' => 'home#map'
  	get '/game' => 'game#game'
end
