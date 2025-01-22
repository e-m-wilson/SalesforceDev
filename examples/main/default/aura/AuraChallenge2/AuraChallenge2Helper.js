({
    handleUserInput : function(component, event) {
        var userInput = component.find('input').get('v.value');
        var method = component.get('c.getAccountList');
        method.setParams({query:userInput});
        method.setCallback(this, function(res) {
            if(res.getState() == "SUCCESS") {
                component.set('v.accList', res.getReturnValue());
            }
        });
        $A.enqueueAction(method);

    },

    doInit : function(component, event) {
        component.set('v.columns', [
            { label: 'Account name', fieldName: 'Name', type: 'text'},
            {
                label: 'Annual Revenue',
                fieldName: 'AnnualRevenue',
                type: 'currency',
                typeAttributes: { currencyCode: 'USD'}
            },
            { label: 'Rating', fieldName: 'Rating', type: 'text'},
        ]);
    }
})