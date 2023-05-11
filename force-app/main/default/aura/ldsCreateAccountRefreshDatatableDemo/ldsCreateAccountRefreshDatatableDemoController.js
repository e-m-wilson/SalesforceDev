({

    init : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Account Name', fieldName: 'Name', type: 'name'},
            {label: 'Account Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency'}
        ]);

        helper.fetchData(component, event, helper);
    },

    handleSave : function(component, event, helper) {
        helper.fetchData(component, event, helper);
        helper.showToast(component, event, helper);
    }
})
