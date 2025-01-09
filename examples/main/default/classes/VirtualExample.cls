public with sharing virtual class VirtualExample {
    public VirtualExample() {

    }

    // can only contain virtual methods
    // virtual classes CAN be initialized
    // virtual methods may or may not be overridden, unlike abstract methods which MUST be overridden
    public virtual String myVirtualMethod() {
        return 'this is my virtual method!'; 
    }


    public virtual String myOtherVirtualMethod() {
        return 'this is my OTHER virtual method!'; 
    }
}