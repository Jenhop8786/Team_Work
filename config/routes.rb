Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  put 'completed_assignment', to: 'assignments#completed', as: :completed_assignment

  resources :users do
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

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
