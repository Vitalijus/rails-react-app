Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
     resources :translations, only: [:index, :create, :update, :destroy]
    end
  end

  root "pages#index"

  # Redirect all unknown routes to root_url / keep at the bottom of routes.rb
  get '*path' => redirect('/')
end
