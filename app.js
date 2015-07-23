/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Pack',

    extend: 'Pack.Application',
    
    autoCreateViewport: false,
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to Pack.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
    init: function() {
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            'Loading application', 'splahscreen'
        );
    }
});
