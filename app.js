Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Sencha',

    controllers: ['Main'],
    views: ['Viewport'],

    launch: function() {
        Ext.create('Sencha.view.Viewport');
    }
});