@isTest
public with sharing class AccountHelper_Test {
    public AccountHelper_Test() {

    }


    // positive tests
    // negative tests
    // single action tests
    // bulk action tests
    // restricted user testing

    @testSetup 
    public static void myTestSetup() {
        //List<Account> accList = Test.loadData(Account.sobjectType, 'testData');
        Account acc = new Account(Name = 'Test Account');
        insert acc;
    }


    @isTest
    public static void myTestMethod() {


       

        // This code runs in system mode
        String uniqueUserName = 'standarduser' + DateTime.now().getTime() + '@testorg.com';
        
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User'];
        User u = new User(Alias = 'standt', Email='standarduser@testorg.com',
        EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
        LocaleSidKey='en_US', ProfileId = p.Id,
        TimeZoneSidKey='America/Los_Angeles',
         UserName=uniqueUserName);

         
        // runs in user mode
        System.runAs(u) {
            Account updatedAcc = [SELECT Id FROM Account WHERE Name = 'Test Account'];

            // resetting governor limits with startTest/stopTest
            Test.startTest();
            AccountHelper.setAccountRatingToHot(updatedAcc.Id);
            Test.stopTest();

            updatedAcc = [SELECT Rating FROM Account WHERE Name = 'Test Account'];

            Assert.areEqual('Hot', updatedAcc.Rating);
          }
    }
}