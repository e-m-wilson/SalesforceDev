({
    handleUserInput : function(component, event) {
        
        var method = component.get('c.createAccount');
        method.setParams({
            name:component.find('inputName').get('v.value'),
            rating:component.find('inputRating').get('v.value'),
            employees:component.find('inputEmployees').get('v.value'),
            annualRevenue:component.find('inputAnnualRevenue').get('v.value')
        });

        method.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                component.find('notifLib').showNotice({
                    "variant":"success",
                    "header": "Success!",
                    "message": "The record " + component.find('inputName').get('v.value') + " has been updated successfully."
                });
            }
        });
        $A.enqueueAction(method);
    }
})