({
    fireEvents : function(component, event) {

        if(event.currentTarget.title == 'Fire Component Event!') {
            var compEvent = component.getEvent("compEvent");
            compEvent.setParams({"exampleParam" : "This is a message fired from a component event!"});
            compEvent.fire();
        } else if (event.currentTarget.title == 'Fire App Event!') {
            var appEvent = $A.get("e.c:myApplicationEvent");
            appEvent.setParams({"exampleParam" : "This is a message fired from a app event!"});
            appEvent.fire();
        } else {
            
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Success!",
                "message": "You fired off a toast message!"
            });
            toastEvent.fire();
            
        }
        
        
    }
})
