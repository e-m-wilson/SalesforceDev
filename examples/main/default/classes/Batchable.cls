public with sharing class Batchable implements Database.Batchable<SObject> {
    public Batchable() {

    }

    public Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('SELECT Id, isClosed, LastModifiedDate FROM Opportunity WHERE isClosed = false AND LastModifiedDate < LAST_N_MONTHS:6');
     }
  
     public void execute(Database.BatchableContext BC, List<sObject> scope){

        List<Opportunity> oppList = new List<Opportunity>();
        for(Sobject s : scope){
             oppList.add((Opportunity) s);
        }      
        
        delete oppList;
     }
  
     public void finish(Database.BatchableContext BC){}
}