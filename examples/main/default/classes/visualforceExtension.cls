public with sharing class VisualforceExtension {

// used in the custom controller example to show how to set the default # of records per page
    ApexPages.StandardSetController sd;
    public VisualforceExtension(ApexPages.StandardSetController controller) {
        
        sd = controller;
        sd.setPageSize(5);
    }

    
}