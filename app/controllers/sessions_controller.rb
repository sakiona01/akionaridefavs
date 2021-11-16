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

    def me
        # user = User.find_by(id: session[:user_id])
        # if user 
            
        # else 
        #     render json: { errors: ['Not Authorized'] }, status: :unauthorized
        # end
        if current_user
            render json: @current_user, include: [:rides, :categories]
        else
            render json: { error: "You are not logged in" }, status: :unauthorized
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
