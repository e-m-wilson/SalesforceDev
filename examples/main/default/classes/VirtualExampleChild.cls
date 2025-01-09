// similar to abstract, you can only extend one virtual class (multi-inheritance is not a thing in apex)

public with sharing class VirtualExampleChild extends VirtualExample {
    public VirtualExampleChild() {

    }

    public override String myOtherVirtualMethod() {
        // the super keyword can be used to call members of the parent class!
        // you can only use the super keyword in methods that have the override keyword!
        System.debug(super.myOtherVirtualMethod());
        return 'the other virtual method was overridden!';
    }
}