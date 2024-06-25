public with sharing class AccountHelper {
    public AccountHelper() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(String query){
        try {
            String sanitizedQ = String.escapeSingleQuotes(query);
            String q = '%' + sanitizedQ + '%';
            return [SELECT Name, AnnualRevenue FROM Account WHERE Name LIKE :q];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        try {
            return [SELECT Name, AnnualRevenue FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void setAccountRatingToHot(String AccId){
        try {
            Account acc = [SELECT Id, Rating FROM Account WHERE Id = :AccId];
            acc.Rating = 'Hot';
            update acc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}