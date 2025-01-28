trigger UserTrigger on User (after insert) {
    for(User u : Trigger.new) {
        FutureMethodExample.createConForUser(u.id);
    }    
}