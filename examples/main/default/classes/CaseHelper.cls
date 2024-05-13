public with sharing class CaseHelper {
    
    @AuraEnabled
    public static Id getCaseId(String caseNum){
        try {
            String q = '%' + caseNum + '%';
            List<Case> caseList = [SELECT ID FROM Case WHERE CaseNumber LIKE :q LIMIT 1];
            return caseList[0].Id;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getHighPriorityCases(){
        try {
            return [SELECT CaseNumber, Priority, Status, Origin FROM Case WHERE Priority = 'High'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getNonHighPriorityCases(){
        try {
            return [SELECT CaseNumber, Priority, Status, Origin, Reason, Description FROM Case WHERE Priority != 'High'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void markAsHighPriority(List<String> idList){
        try {
            List<Case> caseList = [SELECT Id FROM Case WHERE Id IN :idList];
            List<Case> updatedCases = new List<Case>();
            for(Case c : caseList) {
                c.Priority = 'High';
                updatedCases.add(c);
            }
            update updatedCases;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}