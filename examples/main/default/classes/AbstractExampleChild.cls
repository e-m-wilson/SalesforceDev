// you can only extend one abstract class (multi-inheritance is not a thing in apex)
public with sharing class AbstractExampleChild extends AbstractExample {
    public AbstractExampleChild() {

    }

    // we must override any abstract methods to provide the implementation: 
    public override String getEventDetails() {
        return 'This is from a subclass - overriding abstract method!';
    }

    // here we override a virtual method:
    public override String printVirtualMessage() {
        // the super keyword can be used to call members of the parent class!
        super.printVirtualMessage();
        return 'I\'ve overridden the virtual method!';
    }
}