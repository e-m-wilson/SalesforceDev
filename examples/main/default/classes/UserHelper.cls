public with sharing class UserHelper {
    
    @AuraEnabled(cacheable=true)
    public static String getName() {
        return UserInfo.getName();
    }

    public static String getLocale() {
        return UserInfo.getLocale();
    }

    public static String getLanguage() {
        return UserInfo.getLanguage();
    }

    public static System.TimeZone getTimeZone() {
        return UserInfo.getTimeZone();
    }
}