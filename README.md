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

[cdn]: http://cdn.sencha.io/
[installation]: https://github.com/nelstrom/Sencha-Touch-Boilerplate/tree/master/touch#readme
[builds]: http://docs.sencha.com/touch/2-0/#!/guide/building