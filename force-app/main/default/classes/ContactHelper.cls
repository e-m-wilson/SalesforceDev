public with sharing class ContactHelper {
    public ContactHelper() {

    }

    @AuraEnabled
    public static List<Contact> getContactIdsByName(String q){
        try {
            String sanitizedQuery = String.escapeSingleQuotes(q);
            String query = '%' + sanitizedQuery + '%';
            return [SELECT Id FROM Contact WHERE Name LIKE :query];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}