public with sharing class SecurityExamples {
    public SecurityExamples() {

    }

    public List<Account> getAccountsStripped(String name) {

        List<Account> accList = [SELECT Id, Name, AnnualRevenue FROM Account WHERE Name = :name];

        SObjectAccessDecision decision = Security.stripInaccessible(AccessType.UPDATABLE, accList);
        return decision.getRecords();

    }

    public void createAccount(String n, Integer annRevenue) {

        Account acc = new Account(Name = n, AnnualRevenue = annRevenue);

        if(Schema.SObjectType.Account.isCreateable() || Schema.SObjectType.Account.fields.AnnualRevenue.isCreateable()) {
            insert acc;
        }
    }
}