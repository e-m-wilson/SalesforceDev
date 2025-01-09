public with sharing abstract class AbstractExample {
    public AbstractExample() {

    }

    // abstract classes cannot be instantiated

    // abstract classes need at least 1 abstract method.
    // abstract methods may only include method signatures:
    public abstract String getEventDetails();

    // abstract classes can have a mix of abstract and non-abstract methods:
    public String publishEvent() {
        return 'The event has been published';
    }

    // virtual methods may also be declared in abstract classes
    // virtual methods have an implementation by default but you may choose to override later:
    public virtual String printVirtualMessage() {
        return 'this is from a virtual method!';
    }
}