public with sharing class VisualforceExtensionErrorExample {
    
    ApexPages.StandardController sd;
   
    public VisualforceExtensionErrorExample(ApexPages.StandardController controller) {
        
        sd = controller;
    }

    public void saveRecord() {
        try {
            insert sd.getRecord();
        }
        catch (Exception e) {
            ApexPages.addMessages(e);
        }
    }
}