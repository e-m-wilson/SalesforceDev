({
    logEvent : function(cmp, evt) {
        var message = evt.getParam('exampleParam');
        cmp.set('v.eventMessage', message);
    },
    componentLoaded : function(cmp, evt) {
        console.log('component has fully loaded into the DOM...');
    },
    fireLMS : function(cmp, evt) {
        var payload = {
            myMessage: 'This message was sent with LMS!'
        }

        cmp.find('myLmsChannel').publish(payload);
    }
})
