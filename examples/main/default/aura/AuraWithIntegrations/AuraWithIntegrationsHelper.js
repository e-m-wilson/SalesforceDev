({
    search : function(cmp, evt) {

        var pokemon = cmp.find('input').get('v.value');

        var method = cmp.get('c.searchPokemon');
        method.setParams({name:pokemon});
        method.setCallback(this, function(res) {
            if(res.getState() === 'SUCCESS') {
                cmp.set('v.imgLink', res.getReturnValue());
            }
        });
        $A.enqueueAction(method);
    }
})