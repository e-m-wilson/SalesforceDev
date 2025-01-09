// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents


List<List<sObject>> records = [FIND 'Edge' RETURNING Account(Id, Name, AnnualRevenue), Contact(Id, FirstName, LastName)];
List<Account> accList = records[0];
List<Contact> conList = records[1];