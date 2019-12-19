class AddFriendsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :friends, :integer, array: true, default: []
  end
end
