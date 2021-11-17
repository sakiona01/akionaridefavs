class RidesController < ApplicationController
    before_action :set_ride, only: [:show, :update, :destroy]

    def index 
        rides = Ride.all
        render json: rides, include: :category
    end

    def show
        ride = Ride.find(params[:id])
        render json: ride, status: :ok
        
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
        found_ride = Ride.find(params[:id])
        found_ride.update(ride_params)
        render json: found_ride, status: :ok
        # if ride.update(ride_params)
        #     render json: ride
        # else 
        #     render json: ride.errors, status: :unprocessable_entity
    end

    # def destroy
    #     ride.destroy
    # end

    def destroy
        deletable_ride = Ride.find(params[:id])
        deletable_ride.destroy
        head :no_content
    end

    private 
        def set_ride 
            ride = Ride.find(params[:id])
        end

        def ride_params
            params.permit(:ride, :title, :overview, :poster_url, :trailer_url, :category_id, :user_id)
        end
end
