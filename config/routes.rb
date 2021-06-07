Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
  
  resources :pictures, only: :show
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :index] 
    resources :pictures, only: [:index, :show, :create, :update, :destroy]
    resources :pictures_to_galleries, only: [:create, :index, :show]
    resources :galleries, only: [:index, :show, :create, :update, :destroy]
    resources :follows, only: [:index, :create,:show]
    resource :session, only: [:create, :destroy]

    delete '/follows', to: 'follows#destroy'
    delete '/pictures_to_galleries', to: 'pictures_to_galleries#destroy'
  end
end
