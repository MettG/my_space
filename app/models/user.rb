# frozen_string_literal: true

class User < ActiveRecord::Base
	extend Devise::Models
	validates :email, uniqueness: true
	validates :username, uniqueness: true
	has_many :posts, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
				 :recoverable, :rememberable, :trackable, :validatable
	devise :database_authenticatable, :authentication_keys => [:username, :email]			 
	include DeviseTokenAuth::Concerns::User
	
	def self.friended(ids)
    ids = ids.empty? ? nil : ids
    User.where("id IN (?)", ids)
  end

end
