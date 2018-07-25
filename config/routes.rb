Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  put 'completed_assignment', to: 'assignments#completed', as: :completed_assignment
  get 'completed_most', to: 'users#show_completed', as: :completed_most
  # get 'users/:user_id/assignments', to: 'assignments#index', as: :assignments
  # get 'users/:user_id/assignments', to: 'assignments#show', as: :user_assignment

  resources :users, only: [:index, :show] do
    resources :assignments
  end

  resources :assignments do
    resources :tasks do
      member do
        patch :complete
      end
    end
  end

  root "welcome#index"
  get '*path' => redirect('/')

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
