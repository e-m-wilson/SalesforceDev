public with sharing class SoqlExamples {
    public SoqlExamples() {

    }


    public static List<Account> fetchAccsByName(String name) {
        
        // Here we prevent SOQL injections by removing any single quotes
        String q = String.escapeSingleQuotes(name);
        q = '%' + q + '%';

        // you can return queries directly. We could have optionally put the 
        // results in a list variable first and returned that instead. 
        return [SELECT AnnualRevenue, Rating FROM Account WHERE Name LIKE :q];
    }
}