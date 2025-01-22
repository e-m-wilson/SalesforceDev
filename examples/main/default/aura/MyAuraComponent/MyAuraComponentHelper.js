({
    saveRecord : function(component, event) {

       
        var method = component.get("c.createOpp");
        method.setParams({name : component.find('name').get('v.value')});
        method.setCallback(this, function(response){
            if(response.getState() == "ERROR"){
              
               component.set('v.errors', response.getError());
            }

        });
        $A.enqueueAction(method);
    }
})