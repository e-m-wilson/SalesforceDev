public with sharing class VisualforceStandardExtension {
    
    private Case caseRecord;

    public VisualforceStandardExtension(ApexPages.StandardController stdController) {
        this.caseRecord = (Case)stdController.getRecord();
    }

    public void markCaseAsHighPriority() {
        this.caseRecord.Priority = 'High';
        update this.caseRecord;
    }

    
}