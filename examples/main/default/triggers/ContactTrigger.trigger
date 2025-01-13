trigger ContactTrigger on Contact (before insert) {

    // trigger context variable is stopping a recursive scenario!
    if(!Trigger.isExecuting) {
        Account a = new Account(Name = 'TestAccountRecursion');
        insert a;
    }
    
}