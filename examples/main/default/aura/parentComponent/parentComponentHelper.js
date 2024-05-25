({
    logEvent : function(cmp, evt) {
        var message = evt.getParam('exampleParam');
        cmp.set('v.eventMessage', message);
    },
    componentLoaded : function(cmp, evt) {
        console.log('component has fully loaded into the DOM...');
    }
})
