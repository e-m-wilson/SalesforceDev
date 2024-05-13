public with sharing class visualforceExtension {

    ApexPages.StandardSetController sd;
    public visualforceExtension(ApexPages.StandardSetController controller) {
        
        sd = controller;
        sd.setPageSize(5);
    }
}