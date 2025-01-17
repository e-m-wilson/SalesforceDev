public with sharing class SecurityExamples {
    public SecurityExamples() {

    }

    public List<Account> getAccountsStripped(String name) {

        List<Account> accList = [SELECT Id, Name, AnnualRevenue FROM Account WHERE Name = :name];

        /*
         there is a third parameter not shown: enforceRootObjectCRUD 
         by default this is set to true, which means that object level security 
         is checked alongside field level. If the object check fails, then 
         a System.NoAccessException exception is thrown. 

         This will make stripInaccessible only do a check for field level security:
         Security.stripInaccessible(AccessType.UPDATABLE, accList, false)

         If no records are returned when setting enforceRootObjectCRUD to false, 
         then the returned SObjectAccessDecision.getRecords() will simply be an 
         empty list. So don't try and assign this to any variables or you 
         will get a 'List has no rows for assignment to SObject' error. 
        */
        SObjectAccessDecision decision = Security.stripInaccessible(AccessType.UPDATABLE, accList);
        return decision.getRecords();

    }

    public void createAccount(String n, Integer annRevenue) {

        Account acc = new Account(Name = n, AnnualRevenue = annRevenue);

        if(Schema.SObjectType.Account.isCreateable() && Schema.SObjectType.Account.fields.AnnualRevenue.isCreateable()) {
            insert acc;
        }
    }
}