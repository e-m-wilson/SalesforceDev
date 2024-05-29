public with sharing class QueueableExample implements Queueable {
    
    // this class accepts a list of accounts during instantiation 
    public QueueableExample(List<Account> accList) {
        this.accList = accList;
    }

    List<Account> accList;

    /*
        // You can paste the below code in an execute anonomous apex window to try out 
        // the class:

        List<Account> accList = new List<Account>();
        for(Integer i = 0; i<10; i++){
            Account acc = new Account(name='testAccount' + i);
            accList.add(acc);
        }

        // Here we actually instantiate the job and que it for execution:

        QueueableExample qe = new QueueableExample(accList);
        Id jobId = System.enqueueJob(qe);

        // We can use the Apex Job Id that is returned from System.enqueueJob() to 
        get details about the running job:

        AsyncApexJob jobInfo = [SELECT Status,NumberOfErrors FROM AsyncApexJob WHERE Id=:jobId];
    */
    public void execute(QueueableContext qc) {
        insert this.accList;
    }
}