trigger AccountTrigger on Account (before insert, before update, before delete, after insert, after update, after delete, after undelete) {


    /*
        O - one trigger per object
        M - make your triggers logicless
        B - bulkify your triggers
        A - Avoid recursive triggers
    */

    switch on Trigger.operationType {
        when BEFORE_INSERT {

        }
        when BEFORE_UPDATE {

        }
        when BEFORE_DELETE {

        }
        when AFTER_INSERT {
            AccountHelper.createDummyContact(Trigger.new);
            AccountHelper.startRecursion();
        }
        when AFTER_UPDATE {

        }
        when AFTER_DELETE {

        }
        when AFTER_UNDELETE {

        }
    }
        
}