public with sharing class VisualforceCustomController {

    public ID accId{get; set;}
    public List<Account> accounts;
    
    public ApexPages.StandardSetController ssc {
        get {
            if(ssc == null) {
                ssc = new ApexPages.StandardSetController([SELECT Name, AnnualRevenue, Industry FROM Account]);
            }
            return ssc;
        }
        set;
    }


    public List<Account> getAccounts() {
        return (List<Account>) ssc.getRecords();
    }

    public void previous() {
        this.ssc.previous();
    }

    public void next() {
        this.ssc.next();
    }

    public void save() {
        update this.ssc.getRecords(); 
    }

    public PageReference goToAccount() {
        PageReference pr = Page.VisualforceAccountRecordPage;
        pr.getParameters().put('id', this.accId);
        return pr;
    }

    public void deleteRecord() {
        
        Account accToDelete = new Account();
        List<Account> accList = this.getAccounts();
        for(Account acc : accList){
            if(acc.id == this.accId) {
                accToDelete = acc;
            }
        } 
        
        if(Schema.SObjectType.Case.isDeletable()) {
            delete accToDelete;
        }
        
        
        
        ssc = null;
        this.getAccounts();
    }
}