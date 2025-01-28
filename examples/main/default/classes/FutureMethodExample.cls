public with sharing class FutureMethodExample {
    public FutureMethodExample() {

    }

    @future 
    public static void createConForUser(String id) {
        User u = [SELECT Id, FirstName, LastName, Email FROM User WHERE Id = :id];
        Contact c = new Contact(FirstName=u.FirstName, LastName=u.LastName, Email=u.Email, OwnerId=u.id);
        insert c;
    }
    

}