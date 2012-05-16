# jQuery qTip2 for Rails

qTip2 packaged for the Rails 3.1+ asset pipeline.
Check [qTip2 project home page](http://craigsworks.com/projects/qtip2/).

## Installation

Add this line to your application's Gemfile:

    gem 'jquery-qtip2-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jquery-qtip2-rails

## Usage

The use of qTip2 can be [customized](http://craigsworks.com/projects/qtip2/download/) to fit your own needs.
This gem works in a similar manner.

### "Full" version of qTip2

The full version of qTip2 includes all its plugins. This is the default and conservative choice and
I recommend you to use this version.

Add the following JavaScript file to `app/assets/javascripts/application.js`:

    //= require jquery.qtip.js

Add the following stylesheet file to `app/assets/stylesheets/application.css`:

    *= require jquery.qtip.css

### Basic version of qTip2

The basic version of qTip2 does not include any plugin.

File `app/assets/javascripts/application.js`:

    //= require jquery.qtip.basic.js

### Customized version of qTip2

You can also create your own `app/assets/javascripts/jquery.qtip.js` file:

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

And `app/assets/stylesheets/jquery.qtip.css` file:

    /*
     *= include ./jquery-qtip/header.txt
     *= include ./jquery-qtip/core.css
     *= include ./jquery-qtip/modal/modal.css
     *= include ./jquery-qtip/tips/tips.css
     *= include ./jquery-qtip/styles.css
     *= include ./jquery-qtip/extra.css
    */

This allows you to enable only the plugins that you need and thus reduce qTip2 size.
This is possible thanks to the asset pipeline preprocessor `include` directive.
Files `jquery.qtip.js` and `jquery.qtip.basic.js` provided with this gem work the exact same way.

# Minification

This gem does not include minified and compressed version of qTip2 since there is no need of.
This is done automatically by [Rails asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html).

# License

qTip2 is being developed by [Craig Thompson](http://craigsworks.com/) and is dual-licensed
under the open source [MIT](http://en.wikipedia.org/wiki/MIT_License) and
[GPLv2](http://en.wikipedia.org/wiki/MIT_License) licenses.

This gem is licensed under [MIT license](https://raw.github.com/tkrotoff/jquery-qtip2-rails/master/LICENSE).
