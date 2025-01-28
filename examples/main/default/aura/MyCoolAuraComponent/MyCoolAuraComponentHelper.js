({
    doInit : function(component, event) {
        var method = component.get('c.getAllAccounts');
        method.setCallback(this, function(res) {
            if(res.getState() == 'SUCCESS') {
                component.set('v.accList', res.getReturnValue());
            }
          
        });
        $A.enqueueAction(method);
       
       
        component.set('v.columns', [
            {label: "Account Name", fieldName:"Name", type:"text"},
            {label: "Rating", fieldName:"Rating", type:"text"},
            {label: "Industry", fieldName:"Industry", type:"text"}
        ])
    },

    refreshTable : function(component, event) {
        $A.get('e.force:refreshView').fire();
        
    },
})