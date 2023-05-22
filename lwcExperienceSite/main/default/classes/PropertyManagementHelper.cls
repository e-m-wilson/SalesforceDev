public with sharing class PropertyManagementHelper {
    public PropertyManagementHelper() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Residence__c> getAllLocationNamesWithVacantResidences(){
        try {
            return [SELECT Name, Is_Vacant__c, Location__r.Name, Location__c FROM Residence__c WHERE Is_Vacant__c = true];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}




/*

query for reference

gets all locations and unit data
SELECT Name, LocationType, (SELECT Name, number_of_baths__c, number_of_beds__c, Has_Garage__c, Is_Vacant__c FROM Residences__r) FROM Location

*/