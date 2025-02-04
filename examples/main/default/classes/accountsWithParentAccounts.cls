public with sharing class accountsWithParentAccounts {
   
   
    @AuraEnabled(cacheable=true)
    public static List<AccountWrapper> getAccountsWithParent(){
        List<AccountWrapper> wrapList = new List<AccountWrapper>();
        List<Account> accList = [SELECT Name, AnnualRevenue, ParentId FROM Account];

        Set<Id> parentIds = new Set<Id>();
        for(Account acc : accList){
            parentIds.add(acc.ParentId);
        }

        List<Account> parentAccList = [SELECT Name FROM Account WHERE Id IN :parentIds];
        
        for(Account acc : accList){
            for(Account a: parentAccList) {
                if(acc.ParentId == a.Id) {
                    wrapList.add(new AccountWrapper(acc, a));
                }
            }
        }

      
        
        return wrapList;
    } 



    public class AccountWrapper {
        @AuraEnabled public Account accRecord {get;set;}
        @AuraEnabled public Account parentAccRecord {get;set;}

        public AccountWrapper(Account accRecord, Account parentAccRecord) {
            this.accRecord = accRecord;
            this.parentAccRecord = parentAccRecord;
        }
    }
}