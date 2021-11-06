class SessionsController < ApplicationController
    def create 
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else  
            render json: { errors: ['Invalid username and password'] }, status: :unauthorized
        end
    end

    def destroy 
        if session[:user_id]
            session.destroy
        else  
            render json: { errors: ['You are not logged in'] }, status: :unauthorized
        end
    end
end
