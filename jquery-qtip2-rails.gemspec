# -*- encoding: utf-8 -*-
require File.expand_path('../lib/jquery-qtip2-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Tanguy Krotoff (jQuery plugin by Craig Thompson)"]
  gem.email         = ["tkrotoff@gmail.com"]
  gem.description   = %q{qTip2 jQuery plugin}
  gem.summary       = %q{qTip2 packaged for the Rails 3.1+ asset pipeline}
  gem.homepage      = "http://github.com/tkrotoff/jquery-qtip2-rails/"

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "jquery-qtip2-rails"
  gem.require_paths = ["lib"]
  gem.version       = Jquery::Qtip2::Rails::VERSION

  gem.add_dependency 'railties', '>= 3.1.0'

  gem.add_development_dependency 'rails'
  gem.add_development_dependency 'jquery-rails'
  gem.add_development_dependency 'uglifier'
end
