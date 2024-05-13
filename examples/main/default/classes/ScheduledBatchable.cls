global class ScheduledBatchable implements Schedulable {
    global void execute(SchedulableContext sc) {
       Batchable b = new Batchable(); 
       Database.executeBatch(b);
    }
 }