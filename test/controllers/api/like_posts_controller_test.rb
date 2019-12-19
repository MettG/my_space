require 'test_helper'

class Api::LikePostsControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get api_like_posts_update_url
    assert_response :success
  end

end
