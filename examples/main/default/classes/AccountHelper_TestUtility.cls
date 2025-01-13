@isTest
public with sharing class AccountHelper_TestUtility {
    public AccountHelper_TestUtility() {

    }

    public static void createAccounts(Integer i) {

        List<Account> newAccs = new List<Account>();
        for(Integer x = 0; x < i; x++) {
            Account acc = new Account(Name = 'Test Account: ' + x);
            newAccs.add(acc);
        }
        insert newAccs;
    }
}