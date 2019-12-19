class Api::UsersController < ApplicationController
	before_action :authenticate_user!
	def index
		render json: User.all()
	end
	
	def show
		render json: User.find(params[:id])
	end

	def create
		user = User.new(user_params)
		if user.save
			render json: user
		else
			render json: user.errors, status: 422
		end
	end

	def update
		id = params[:id].to_i
		puts "updating friend id:#{id}"
		unless current_user.friends.include?(id)
			current_user.friends << id
		else
			current_user.friends -= [id]
		end
		current_user.save
		render json: current_user
	end
	
	private
		def user_params
			params.require(:user).permit(:username, :email, :password, :password_confirmation)
		end

end
