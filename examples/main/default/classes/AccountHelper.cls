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
    
    public static void createDummyContact(List<Account> accList) {

        List<Contact> conList = new List<Contact>();
        for(Integer i = 0; i < accList.size(); i++) {
            Contact con = new Contact(LastName = 'TestCon' + i);
            con.AccountId = accList[i].Id;
            conList.add(con);
        }
        Database.insert(conList);
    }

    public static void startRecursion() {
        Contact c = new Contact(LastName = 'testingRecursion');
        insert c;
    }
}