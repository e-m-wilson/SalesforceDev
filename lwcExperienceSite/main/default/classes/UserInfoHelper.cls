public without sharing class UserInfoHelper {
    public UserInfoHelper() {

    }

    @AuraEnabled
    public static string getUserFirstName(){
        try {
            return UserInfo.getFirstName();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}