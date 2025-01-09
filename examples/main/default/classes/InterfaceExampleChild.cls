// uses implements keyword NOT extends
// classes can implement many interfaces
// e.g. "implements InterfaceExample, InterfaceExample2 {..."
public with sharing class InterfaceExampleChild implements InterfaceExample {
    public InterfaceExampleChild() {

    }

    public void planEvent() {
        // implementation for planning 
    }
    public void manageLogistics() {
        // implementation for managing logistics 
    }
    public void handleEmergencies() {
        // implementation for handling emergencies
    }
}