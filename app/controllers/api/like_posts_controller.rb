class Api::LikePostsController < ApplicationController
	def update
		Post.find(params[:id]).likes+=1
  end
end
