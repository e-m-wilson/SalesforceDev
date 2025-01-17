public with sharing class VisualforceRowActions {
    
    
    public VisualforceRowActions() {
       
    }

    //used in Page.RowActions to grab the record to delete
    public String accIdToDelete {get;set;}

    public List<Account> accs {get {
        return [SELECT Name, Rating, AnnualRevenue FROM Account];
    }}

    // used for RowActions.page to delete a record from datatable row
   public PageReference deleteRecord() {
    try {
        for(Account a : accs) {
            if(a.id == accIdToDelete) {
                delete a;    
            }
        } 
    } catch (Exception e) {
        ApexPages.addMessages(e);
    }
    return Page.RowActions;
}
}