({
    setMessage : function(component, event) {
        var message = event.getParam('exampleParam');
        component.set("v.message", message)
    }
})