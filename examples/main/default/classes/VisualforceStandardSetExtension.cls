public with sharing class VisualforceStandardSetExtension {
    // used in the custom controller example to show how to set the default # of records per page
    ApexPages.StandardSetController sd;
    public VisualforceStandardSetExtension(ApexPages.StandardSetController controller) {
        
        sd = controller;
        sd.setPageSize(5);
    }
}