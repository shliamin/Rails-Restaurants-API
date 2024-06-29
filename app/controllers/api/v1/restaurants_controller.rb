class Api::V1::RestaurantsController < Api::V1::BaseController
  before_action :set_restaurant, only: [:show, :update, :destroy]

  def index
    @restaurants = policy_scope(Restaurant)
    render json: @restaurants
  end

  def show
    authorize @restaurant
    render json: @restaurant
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    authorize @restaurant

    if @restaurant.save
      render json: @restaurant, status: :created
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  def update
    authorize @restaurant

    if @restaurant.update(restaurant_params)
      render json: @restaurant
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @restaurant
    @restaurant.destroy
    head :no_content
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :rating)
  end
end
