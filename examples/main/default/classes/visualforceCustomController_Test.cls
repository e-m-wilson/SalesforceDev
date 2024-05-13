@isTest
public with sharing class visualforceCustomController_Test {
    
    
    public visualforceCustomController_Test() {
       
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
        visualforceCustomController vcc = new visualforceCustomController();
        vcc.next();

        List<Account> accList = vcc.getAccounts();
        Assert.areEqual('testAcc20', accList[0].name);

        vcc.previous();
        accList = vcc.getAccounts();
        Assert.areEqual('testAcc0', accList[0].name);
    }

    @isTest
    public static void testRecordPage() {
        PageReference pageRef = Page.visualforceAccountRecordPage;
        Test.setCurrentPage(pageRef);
        
        visualforceCustomController vcc = new visualforceCustomController();
        List<Account> accList = [SELECT ID FROM Account WHERE Name = 'testAcc0'];
        ApexPages.currentPage().getParameters().put('id', accList[0].id);

        vcc.accId = accList[0].id;
        String url = vcc.goToAccount().getUrl();
        Assert.areEqual(pageRef.getUrl(), url);
    }
}