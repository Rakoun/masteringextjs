/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Pack.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Pack',

    views: [
        //'login.Login' //ne marche pas si décommenté
    ],

    controllers: [
        'Root'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],
    
    launch: function () {
        var me = this;
        var task = new Ext.util.DelayedTask(function() {
            me.splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts ){
                        Ext.widget('login-dialog');
                        console.log("coucou");
                    }
                }
            });
        });
        task.delay(2000);
    },
    init: function() {
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            'Loading application', 'splahscreen'
        );
        me.splashscreen.addCls('splashscree');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    }

});
