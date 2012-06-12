Rails.application.routes.draw do

  get "home/index"

  mount Jquery::Qtip2::Rails::Engine => "/jquery-qtip2-rails"
end
