# jQuery qTip2 for Rails

qTip2 packaged for the Rails 3.1+ asset pipeline

## Installation

Add this line to your application's Gemfile:

    gem 'jquery-qtip2-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jquery-qtip2-rails

## Usage

Add stylesheet file to app/assets/stylesheets/application.css:

    *= require jquery.qtip.css

Add JavaScipt file to app/assets/javascripts/application.js:

    //= require jquery.qtip.js

You can also create your own app/assets/stylesheets/jquery.qtip.css and app/assets/javascripts/jquery.qtip.js:

    /*
     *= include ./jquery-qtip/header.txt
     *= include ./jquery-qtip/core.css
     *= include ./jquery-qtip/modal/modal.css
     *= include ./jquery-qtip/tips/tips.css
     *= include ./jquery-qtip/styles.css
     *= include ./jquery-qtip/extra.css
    */

    //= include ./jquery-qtip/header.txt
    //= include ./jquery-qtip/intro.js
    //= include ./jquery-qtip/core.js
    //= include ./jquery-qtip/ajax/ajax.js
    //= include ./jquery-qtip/bgiframe/bgiframe.js
    //= include ./jquery-qtip/imagemap/imagemap.js
    //= include ./jquery-qtip/modal/modal.js
    //= include ./jquery-qtip/svg/svg.js
    //= include ./jquery-qtip/tips/tips.js
    //= include ./jquery-qtip/outro.js

This allows you to customize the use of qTip2 and enable the plugins
that you like thanks to the asset pipeline preprocessor.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
