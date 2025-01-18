public with sharing class VisualforceAccountRecordPageExtension {
    
    ApexPages.StandardController sc;
    public VisualforceAccountRecordPageExtension(ApexPages.StandardController controller) {
        sc = controller;
    }

    public String conIdToDelete {get;set;}

    public List<Contact> conList {
        get{return [SELECT FirstName, LastName, Email, Phone FROM Contact WHERE AccountId = :sc.getId()];}
        set;    
    }    

    public PageReference cancel() {
        return null;
    }

    public void deleteRecord() {
        Contact c = [SELECT Id FROM Contact WHERE ID = :conIdToDelete];
        try {
            delete c;
        } catch(Exception e) {
            ApexPages.addMessages(e);
        }
    }
    
}