public with sharing class MyVisualforceExtension {

    private Case caseRecord;

    public MyVisualforceExtension(ApexPages.StandardController stdController) {
        this.caseRecord = (Case)stdController.getRecord();
    }

    public void markCaseAsHighPriority() {
        this.caseRecord.Priority = 'High';
        update this.caseRecord;
    }
}