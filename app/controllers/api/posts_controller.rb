class Api::PostsController < ApplicationController
	before_action :authenticate_user!
	before_action :set_post, only: [:update, :destroy]

	def index
		render json: current_user.posts.all
  end

	def create
		post = Post.new(post_params)
		if post.save
			render json: post
		else
			render json: post.errors, status: 422
		end
  end

	def update
		if @post.update(post_params)
			render json: post
		else
			render json: post.errros, status: 422
		end
  end

	def destroy
		@post.destroy
	end
	
	private
		def post_params
			params.require(:post).permit(:status,:user_id)
		end
		def set_post
			@post = Post.find(params[:id])
		end
end
