@isTest
public with sharing class VisualforceCustomController_Test {
    
    
    public VisualforceCustomController_Test() {
       
    }

    @TestSetup
    static void makeData(){
        List<Account> accList= new List<Account>();
        for(Integer i = 0; i<40; i++){
            Account acc = new Account(Name='testAcc' + i);
            accList.add(acc);
        }
        insert accList;
    }

    @isTest
    public static void testPagination() {
        VisualforceCustomController vcc = new VisualforceCustomController();
        vcc.next();

        List<Account> accList = vcc.getAccounts();
        Assert.areEqual('testAcc20', accList[0].name);

        vcc.previous();
        accList = vcc.getAccounts();
        Assert.areEqual('testAcc0', accList[0].name);
    }

    @isTest
    public static void testRecordPage() {
        PageReference pageRef = Page.VisualforceAccountRecordPage;
        Test.setCurrentPage(pageRef);
        
        VisualforceCustomController vcc = new VisualforceCustomController();
        List<Account> accList = [SELECT ID FROM Account WHERE Name = 'testAcc0'];
        ApexPages.currentPage().getParameters().put('id', accList[0].id);

        vcc.accId = accList[0].id;
        String url = vcc.goToAccount().getUrl();
        Assert.areEqual(pageRef.getUrl(), url);
    }
}