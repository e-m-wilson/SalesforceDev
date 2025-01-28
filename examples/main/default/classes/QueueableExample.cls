public with sharing class QueueableExample implements Queueable {
    
    // this class accepts a value during instantiation 
    public QueueableExample(String imgURL) {
      this.imgURL = imgURL;
    }

    private String imgURL;


    /*
        // You can paste the below code in an execute anonomous apex window to try out 
        // the class:

        // Here we actually instantiate the job and que it for execution (using developer jokes):

        QueueableExample qe = new QueueableExample('dev');
        Id jobId = System.enqueueJob(qe);

        // We can use the Apex Job Id that is returned from System.enqueueJob() to 
        get details about the running job:

        AsyncApexJob jobInfo = [SELECT Status,NumberOfErrors FROM AsyncApexJob WHERE Id=:jobId];
    */
    public void execute(QueueableContext qc) {
        
        User u = [SELECT image_URL__c FROM USER WHERE Id = :UserInfo.getUserId()];
        u.image_URL__c = this.imgURL;
        update u;
        
        
    }
}