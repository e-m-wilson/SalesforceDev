public with sharing class MyAuraController {
    
    public MyAuraController() {

    }

    @AuraEnabled
    public static List<Account> getAccountList(String query){
        
        String sanitizedQ = String.escapeSingleQuotes(query);
        String q = '%' + sanitizedQ + '%';
        return [SELECT Name, AnnualRevenue, Rating FROM Account WHERE Name LIKE :q];
        
    }

    @AuraEnabled 
    public static void createOpp(String name) {
        try {
            Opportunity opp = new Opportunity(Name=name);
            insert opp;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        
    }

    @AuraEnabled 
    public static void createAccount(String name, String rating, String employees, String annualRevenue) {
        try {
            Account acc = new Account(Name=name, Rating = rating, NumberOfEmployees= Integer.valueOf(employees), AnnualRevenue= Decimal.valueOf(annualRevenue));
            insert acc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        
    }

    @AuraEnabled
    public static List<Opportunity> getBig3AccountOpps(String id){
        return [SELECT Name FROM Opportunity WHERE AccountId = :id ORDER BY Amount DESC LIMIT 3];
    }

    @AuraEnabled
    public static List<Account> getAllAccounts(){
        try {
            return [SELECT Name, Rating, Industry FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}