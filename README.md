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

File `app/assets/javascripts/application.css`:

    //= require jquery.qtip.basic.css

### Customized version of qTip2

You can also create your own `app/assets/javascripts/jquery.qtip.js` file:

    //= include jquery-qtip/src/intro.js
    //= include jquery-qtip/src/core.js
    //= include jquery-qtip/src/svg/svg.js
    //= include jquery-qtip/src/ajax/ajax.js
    //= include jquery-qtip/src/tips/tips.js
    //= include jquery-qtip/src/modal/modal.js
    //= include jquery-qtip/src/viewport/viewport.js
    //= include jquery-qtip/src/imagemap/imagemap.js
    //= include jquery-qtip/src/ie6/ie6.js
    //= include jquery-qtip/src/outro.js

And `app/assets/stylesheets/jquery.qtip.css` file:

    /*
     *= include jquery-qtip/src/core.css
     *= include jquery-qtip/src/basic.css
     *= include jquery-qtip/src/css3.css
     *= include jquery-qtip/src/tips/tips.css
     *= include jquery-qtip/src/modal/modal.css
     *= include jquery-qtip/src/ie6/ie6.css
    */

This allows you to enable only the plugins that you need and thus reduce qTip2 size.
This is possible thanks to the asset pipeline preprocessor `include` directive.
Files `jquery.qtip.js` and `jquery.qtip.basic.js` provided with this gem work the exact same way.

## Minification

This gem does not include minified and compressed version of qTip2 since there is no need of.
This is done automatically by [Rails asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html).

## qTip2 Twitter Bootstrap theme

qTip2 includes a [Twitter Bootstrap theme](http://craigsworks.com/projects/qtip2/docs/style/#classes).

![Bootstrap theme](http://img11.hostingpics.net/pics/628782qtip2bootstrap2.png)

How to use:

```JavaScript
$('.selector').qtip({
  content: 'Hello World!'
  style: {
    classes: 'qtip-bootstrap'
  }
})
```

## Rails test/dummy

jquery-qtip2-rails comes with a dummy Rails application that you can run:

Development mode:
- `bundle`
- `cd test/dummy && rails s`

Production mode:
- `bundle`
- `cd test/dummy && rake assets:precompile`: generates .js and .css files inside test/dummy/public/assets/ + test/dummy/tmp/
- `cd test/dummy && rails s -e production`

## License

qTip2 is being developed by [Craig Thompson](http://craigsworks.com/) and is dual-licensed
under the open source [MIT](http://en.wikipedia.org/wiki/MIT_License) and
[GPLv2](http://en.wikipedia.org/wiki/MIT_License) licenses.

This gem is licensed under [MIT license](https://raw.github.com/tkrotoff/jquery-qtip2-rails/master/LICENSE).
