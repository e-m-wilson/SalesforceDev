public with sharing class VisualforceExtension {

    ApexPages.StandardSetController sd;
    public VisualforceExtension(ApexPages.StandardSetController controller) {
        
        sd = controller;
        sd.setPageSize(5);
    }
}