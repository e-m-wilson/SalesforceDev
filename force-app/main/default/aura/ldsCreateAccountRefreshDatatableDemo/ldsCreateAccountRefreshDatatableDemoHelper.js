({
    fetchData : function(component, event, helper) {

        var method = component.get("c.getAllAccounts");
        method.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                component.set('v.data', response.getReturnValue());
            }

        });
        $A.enqueueAction(method);
    },

    showToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been created successfully."
        });
        toastEvent.fire();
    }
})
