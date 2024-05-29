global class ScheduledBatchable implements Schedulable {
    global void execute(SchedulableContext sc) {
       Batchable b = new Batchable(); 
       Database.executeBatch(b);
    }

    /* 
      // This class will call the Batchable.cls at a set time. You can put the 
      // following code in an execute anonomous debug window to try it out:

      // To use schedulable classes we initialize the class:
      ScheduledBatchable sb = new ScheduledBatchable();

      // Here we set a schedule with a CRON expression. It is set to trigger as follows: 
      // 0 (seconds) 0 (minutes) 0 (hours) 1 (first day of the month) * (every month) ? (any day of the week)
      // So essentially this is scheduled to run the first second of the first day every month, regardless of what day it is
      
      String schedule = '0 0 0 1 * ?';

      // Here we schedule our job and get the returned JobId: 
      String jobId = System.schedule('my job name', schedule, sb);

      // Here we can get info about the scheduled job using the jobId: 
      CronTrigger ct = 
      [SELECT TimesTriggered, NextFireTime 
      FROM CronTrigger 
      WHERE Id = :jobID];
    */
 }