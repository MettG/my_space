class Api::FriendsController < ApplicationController
	def index
		render json: User.friended(current_user.friends)
	end
end
