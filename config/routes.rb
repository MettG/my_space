Rails.application.routes.draw do
  namespace :api do
		resources :users, only: [:index, :show, :create, :update] do
			resources :posts, only: [:index, :create, :update, :destroy]
			resources :like_posts, only: [:update]
		end
		resources :friends, only: [:index]
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
end
