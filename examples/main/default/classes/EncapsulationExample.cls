public with sharing class EncapsulationExample {
    
    private String message;

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String value) {
        this.message = value;
    }

    // Read Only
    private String phoneNumber {get;}

    // Write Only
    private String email {set;}

    // Read-Write
    private String address {
        get {
            return this.address;
        }
        set {
            this.address = value;
        }
    }

   

}