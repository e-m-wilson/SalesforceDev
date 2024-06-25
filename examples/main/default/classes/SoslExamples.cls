public with sharing class SoslExamples {
    public SoslExamples() {

    }

    public static List<Account> fetchAccsByName(String name) {

        // Here we prevent SOSL injections by removing any single quotes
        String q = String.escapeSingleQuotes(name);
        q = '*' + q + '*';

        /*
            There are a couple ways we could write the syntax:

            1. 
            List<List<sObject> results = [FIND :q IN NAME FIELDS RETURNING Account(AnnualRevenue, Rating) ];
            List<Account> accList = (List<Account>) results[0];
            return accList; 

        
            2. 
            this syntax uses only one line:
        */

        return (List<Account>)[FIND :q IN NAME FIELDS RETURNING Account(AnnualRevenue, Rating) ][0];
    }
}