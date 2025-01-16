public with sharing class PartialPageRerenderingExamples {
    
    public String workcity {get;set;}
    public String message {get;set;}
    ApexPages.StandardController sd;


    public PartialPageRerenderingExamples(ApexPages.StandardController controller) {
        sd = controller;
        message = 'This is my original message!';
    }

    public void updateCity() {
        Contact c = (contact) sd.getRecord();
        Account relatedAcc = [SELECT ShippingAddress FROM Account WHERE ID = :c.AccountId];
        Address workAddress = relatedAcc.ShippingAddress;
        
        workcity = workAddress.city;    
        
       
    }

    public void changeMessage() {
        message = 'This is my updated message!';
    }
}