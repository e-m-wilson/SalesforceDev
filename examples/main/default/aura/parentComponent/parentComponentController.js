({
    eventHandler : function(component, event, helper) {
        helper.logEvent(component, event);
    },
    doInit : function(component, event, helper) {
        helper.componentLoaded(component, event);
    }
})
