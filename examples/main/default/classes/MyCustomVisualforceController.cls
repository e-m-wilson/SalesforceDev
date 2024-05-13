public with sharing class MyCustomVisualforceController {
    
    private string username;

    public MyCustomVisualforceController() {
        this.username = UserInfo.getFirstName();
    }


    public String getUsername() {
        return this.username;
    }
}