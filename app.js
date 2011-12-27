Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Sencha',
    
    controllers: ['Main'],
    
    launch: function() {
        Ext.create('Sencha.view.Viewport');
    }
});