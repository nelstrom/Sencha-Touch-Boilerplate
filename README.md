This starter kit provides two alternate HTML files: `index.html` loads the libraries locally; `hosted.html` loads the Touch JS/CSS libraries from [Sencha's content delivery network][cdn] (CDN).

Using Sencha's CDN means that you don't have to download the Sencha Touch SDK, but it does require an internet connection. Also, since the `Ext.Loader` fetches framework dependencies dynamically, it makes dozens of separate HTTP requests, which causes a slow page load. During development, you're better off working a local copy of the Sencha Touch SDK. Follow these instructions to [install the Sencha Touch libraries][installation].

[cdn]: http://cdn.sencha.io/
[installation]: https://github.com/nelstrom/Sencha-Touch-Boilerplate/tree/master/touch#readme
