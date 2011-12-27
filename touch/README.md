Installing Sencha Touch
-----------------------

[Download the Sencha Touch SDK][sdk], and unzip the archive. Assuming that you've saved the SDK into your downloads folder (`~/Downloads/sencha-touch-2.0.0-pr3`), you can run the following commands in the terminal:

    cd path/to/Sencha-Touch-Boilerplate
    cp -R ~/Downloads/sencha-touch-2.0.0-pr3/ touch/

This copies the entire Sencha Touch SDK into the `touch/` directory.

Alternative: a minimal installation
-----------------------------------

To make Sencha Touch Boilerplate run offline, the bare minimum requirement is to download the JS and CSS files. You can do so by running the following commands in the terminal (assuming you have wget installed):

    cd path/to/Sencha-Touch-Boilerplate
    wget -P touch/ http://dev.sencha.com/deploy/sencha-touch-2-pr3/sencha-touch-all-debug.js
    wget -P touch/resources/css/ http://dev.sencha.com/deploy/sencha-touch-2-pr3/resources/css/sencha-touch.css

[sdk]: http://www.sencha.com/products/touch/download/
[wget]: http://www.gnu.org/software/wget/