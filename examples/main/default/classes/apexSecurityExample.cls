// The sharing keywords here determine record level security
public with sharing class ApexSecurityExample {
    public ApexSecurityExample() {

    }

    // WITH USER_MODE will enforce object and field level security: 
    List<Account> accList = [SELECT Id FROM Account WITH USER_MODE];

    public List<Account> getAccessibleRecords() {
        List<sObject> cons = [SELECT Id, Name FROM Contact];
        SObjectAccessDecision decision = Security.stripInaccessible(AccessType.UPDATABLE, cons);
        return decision.getRecords();
    }
    
    public void checkCreateable() {
        Account a = new Account(Name='Example');
        if(Schema.SObjectType.Account.isCreateable() && Schema.SObjectType.Account.Fields.Industry.isCreateable()){
            insert a;
        }
    }
}