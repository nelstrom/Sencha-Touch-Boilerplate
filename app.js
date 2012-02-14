Ext.application({
    name: 'Sencha',

    controllers: ['Main'],
    views: ['Main'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'Sencha.view.Main'
        });
    }
});