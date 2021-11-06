class RidesController < ApplicationController
    before_action :set_ride, only: [:show, :update. :destroy]

    def index 
        rides = Ride.all
        render json: rides
    end

    def show
        render json: ride
    end

    def create 
        current_user = User.find(session[:user_id])
        ride = current_user.rides.build(ride_params)
        if ride.save
            render json: ride, status: :created, location: ride
        else 
            render json: ride.errors, status: :unprocessable_entity
        end
    end

    def update 
        if ride.update(movie_params)
            render json: ride
        else 
            render json: ride.errors, status: :unprocessable_entity
        end
    end

    def destroy
        ride.destroy
    end

    private 
        def set_ride 
            ride = Ride.find(params[:id])
        end

        def ride_params
            params.require(:ride).permit(:title, :overview, :poster_url, :trailer_url, :category_id, :user_id, :favorite)
        end
end
