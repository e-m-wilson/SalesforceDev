({
    handleComponentLoad : function(component, event, helper) {
        var resource = component.find('myResource');
        resource.fireMessage();
    }
})
