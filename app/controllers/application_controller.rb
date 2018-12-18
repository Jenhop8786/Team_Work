class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

    def after_sign_in_path_for(assignment)
      request.env['omniauth.origin'] || root_path
    end

    def logged_in?
      !!session[:user_id]
    end 

    def require_login
      redirect_to root_path unless logged_in?
    end

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    end
end#class
