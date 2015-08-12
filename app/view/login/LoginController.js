/**
 * Created by rgeromegnace on 10/08/15.
 */
Ext.define('Packt.view.login.LoginController', { // #1
    extend: 'Ext.app.ViewController', // #2
    alias: 'controller.login', // #3
    onTextFieldSpecialKey: function(field, e, options){ }, // #4
    onTextFieldKeyPress: function(field, e, options){ }, // #5
    onButtonClickCancel: function(button, e, options){
        //console.log('login cancel');
        this.lookupReference('form').reset();
    }, // #6
    onButtonClickSubmit: function(button, e, options){
        console.log('login submit');
        var me = this;
        if (me.lookupReference('form').isValid()){ // #1
            me.doLogin(); // #2
        }
    }, // #7
    doLogin: function() {
        var me = this,
            form = me.lookupReference('form');
        form.submit({
            clientValidation: true, // #3
            url: 'php/security/login.php', // #4
            scope: me, // #5
            success: 'onLoginSuccess', // #6
            failure: 'onLoginFailure' // #7
        });
    }, // #8
    onLoginFailure: function(form, action) { }, // #9
    onLoginSuccess: function(form, action) { } // #10
});