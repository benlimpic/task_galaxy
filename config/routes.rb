Rails.application.routes.draw do
  
  resources :users
  resources :projects do
      resources :tasks do
          resources :subtasks
      end
    end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/me', to: "users#me"
  post '/signup', to: "users#signup"
  post '/login', to: "sessions#login"
  delete '/logout', to: "sessions#logout"
end
