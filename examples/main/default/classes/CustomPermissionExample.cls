public with sharing class CustomPermissionExample {
    public CustomPermissionExample() {

    }

    
    
    public static void checkCustomPermission() {
        Boolean hasCustomPermission = FeatureManagement.checkPermission('My_Custom_Permission');
        System.debug(hasCustomPermission);
    }
}