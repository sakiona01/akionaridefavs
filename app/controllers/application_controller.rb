class ApplicationController < ActionController::API
    include ActionController::Cookies
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end

    private 

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 400
    end 
end
