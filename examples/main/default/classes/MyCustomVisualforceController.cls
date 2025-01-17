public with sharing class MyCustomVisualforceController {
    
    // private string username;

    // public MyCustomVisualforceController() {
    //     this.username = UserInfo.getFirstName();
    // }


    // public String getUsername() {
    //     return this.username;
    // }

    public String username {get {
        return UserInfo.getUserName();   
    }}

    public List<Account> accs {get { return [Select Name, AnnualRevenue FROM Account];} set;}

}