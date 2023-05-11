public with sharing class AccountHelper {
    public AccountHelper() {

    }

    @AuraEnabled
    public static List<Account> getAccountList(String query){
        try {
            String sanitizedQ = String.escapeSingleQuotes(query);
            String q = '%' + sanitizedQ + '%';
            return [SELECT Name, AnnualRevenue FROM Account WHERE Name LIKE :q];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> getAllAccounts(){
        try {
            return [SELECT Name, AnnualRevenue FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}