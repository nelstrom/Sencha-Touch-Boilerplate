This starter kit provides two alternate HTML files: `index.html` loads the libraries locally; `hosted.html` loads the Touch JS/CSS libraries from [Sencha's content delivery network][cdn] (CDN).

Using Sencha's CDN means that you don't have to download the Sencha Touch SDK, but it does require an internet connection. The `hosted.html` file is provided for convenience, but you'll have a better development experience if you use a local copy of the Sencha Touch SDK. Follow these instructions to [install the Sencha Touch libraries][installation].

## Local libraries

The `index.html` file uses these conventions:

* loads `sencha-touch-debug.js`, which contains the core classes and loader
* `Ext.loader` dynamically fetches dependencies in the framework (from `./touch/src`) and the application (from `./app`)
* uses a custom stylesheet, compiled from the Sencha Touch theme

## Hosted libraries

The `hosted.html` follows different conventions:

* loads `sencha-touch-all-debug.js`, which contains the entire Sencha Touch framework
* `Ext.loader` dynamically fetches dependencies from the application
* uses the default Sencha Touch theme

Read up on [Sencha Touch Builds][builds] in the documentation.

## Building the custom theme

To build the theme:

    cd ~/path/to/Sencha-Touch-Boilerplate
    cd styles
    compass compile

Alternatively, run `compass watch` to have the theme compile every time you save a change to the `app.scss` file.

## Building the application into a single JavaScript

You'll need to [install the Sencha SDK tools][sencha-sdk] before you can build the application JavaScript. Documentation for the following commands can be found by running `sencha help create jsb` or `sencha help build`.

First, generate a JS builder manifest file:

    sencha create jsb --app-entry=index.html --project=app.jsb3

Then generate the `app-all.js` file:

    sencha build --projectFile=app.jsb3 --deployDir=./

That should generate `app-all.js` and `all-classes.js` files. These are used in `production.html` and `production-debug.html`, respectively.

[cdn]: http://cdn.sencha.io/
[installation]: https://github.com/nelstrom/Sencha-Touch-Boilerplate/tree/master/touch#readme
[builds]: http://docs.sencha.com/touch/2-0/#!/guide/building
[sencha-sdk]: http://www.sencha.com/products/sdk-tools