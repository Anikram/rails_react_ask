class UsersController < ApplicationController
  def index
  end

  def new
  end

  def edit
  end

  def show
    @user = User.new(
      first_name: 'Sam',
      last_name: 'Wise',
      avatar_url: ''
    )
    # https://ru.gravatar.com/userimage/138026325/db741d48f05a99f388bc632b7bc3f70e.jpg?size=200
  end
end
