public with sharing class PolymorphismExample {
    public PolymorphismExample() {

    }

    // polymorphism is achieved through method overriding and method overloading
    // see examples of method overriding with our AbstractExample or VirtualExample classes (and their children classes)

    public String printMessage(String fname) {
        return 'Hi ' + fname + '!';
    }

    public String printMessage(String fname, String lname) {
        return 'Hi ' + fname + ' ' + lname + '!';
    }

    public String printMessage(String fname, String lname, Integer age) {
        return 'Hi ' + fname + ' ' + lname + '!' + ' You are: ' + age + ' years old!';
    }

}