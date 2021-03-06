class UsersController < ApplicationController
    wrap_parameters :user, include: [:username, :email, :password]

    def index 
        users = User.all
        render json: users
    end

    def show 
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

    def create 
        user = User.create!(user_params)
        if user 
            session[:user_id] = user.id
            render json: user, include: ['rides'], status: :created
        else 
            render json: { errors: ['Not Authorized'] }, status: :unauthorized
        end
    end

    def update 
        if user.update(user_params)
            render json: user
        else 
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def destroy
        user.destroy 
    end

    private 
        def set_user 
            user = User.find(params[:id])
        end

        def user_params 
            params.require(:user).permit(:username, :email, :password)
        end
    end

