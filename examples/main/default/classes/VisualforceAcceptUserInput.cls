public with sharing class VisualforceAcceptUserInput {
    
    
    public VisualforceAcceptUserInput() {
        
    }

    public String query {get;set;}
    public List<Account> accs {get;set;}

    ApexPages.StandardSetController ssc {
        get {
            
            
            String q = String.escapeSingleQuotes(query);
            q = '%' + q + '%';
            ssc = new ApexPages.StandardSetController([SELECT Name, AnnualRevenue, Industry FROM Account WHERE Name LIKE :q]);
        
            return ssc;
        }
        set;
    }

    

    public void fetchRecords() {
    
        this.accs = ssc.getRecords();
    }
}