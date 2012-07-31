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

qTip2 can be [customized](http://craigsworks.com/projects/qtip2/download/) to fit your own needs.
This gem works in a similar manner.

### "Full" version of qTip2

The full version of qTip2 includes all its plugins. This is the recommended version.

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

    //= include jquery-qtip/src/header.txt
    //= include jquery-qtip/src/intro.js
    //= include jquery-qtip/src/core.js
    //= include jquery-qtip/src/ajax/ajax.js
    //= include jquery-qtip/src/bgiframe/bgiframe.js
    //= include jquery-qtip/src/imagemap/imagemap.js
    //= include jquery-qtip/src/modal/modal.js
    //= include jquery-qtip/src/svg/svg.js
    //= include jquery-qtip/src/tips/tips.js
    //= include jquery-qtip/src/outro.js

And `app/assets/stylesheets/jquery.qtip.css` file:

    /*
     *= include jquery-qtip/src/header.txt
     *= include jquery-qtip/src/core.css
     *= include jquery-qtip/src/modal/modal.css
     *= include jquery-qtip/src/tips/tips.css
     *= include jquery-qtip/src/styles.css
     *= include jquery-qtip/src/extra.css
    */

This allows you to enable only the plugins that you need and thus reduce qTip2 size.
This is possible thanks to the asset pipeline preprocessor `include` directive.
Files `jquery.qtip.js` and `jquery.qtip.basic.js` provided with this gem work the exact same way.

## Minification

This gem does not include minified and compressed version of qTip2 since there is no need of.
This is done automatically by [Rails asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html).

## qTip2 Twitter Bootstrap theme

qTip2 includes a [Twitter Bootstrap theme](http://craigsworks.com/projects/qtip2/docs/style/#classes).

![Bootstrap theme](https://a248.e.akamai.net/camo.github.com/088ac0e36bc7deffbdf49b1d32423c1ae6a999d3/687474703a2f2f696d6731352e686f7374696e67706963732e6e65742f706963732f33353330373571546970626f6f7473747261706f726967696e616c2e706e67)

How to use:

    $('.selector').qtip({
      content: 'Hello World!'
      style: {
        classes: 'ui-tooltip-bootstrap'
      }
    })

## License

qTip2 is being developed by [Craig Thompson](http://craigsworks.com/) and is dual-licensed
under the open source [MIT](http://en.wikipedia.org/wiki/MIT_License) and
[GPLv2](http://en.wikipedia.org/wiki/MIT_License) licenses.

This gem is licensed under [MIT license](https://raw.github.com/tkrotoff/jquery-qtip2-rails/master/LICENSE).
