public with sharing class TCLExample {
    public TCLExample() {

    }

    public void myTCLExample() {

        Account myAccountRecord = new Account(Name = 'test');
        Opportunity myOpportunityRecord = new Opportunity();


        Savepoint sp1 = Database.setSavepoint();

    
        Database.SaveResult sr1 = Database.insert(myAccountRecord, false);
        Database.SaveResult sr2 = Database.insert(myOpportunityRecord, false);

        if(!sr1.isSuccess() || !sr2.isSuccess()){
            Database.rollback(sp1);
        }
    }
}