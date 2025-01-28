import { LightningElement } from 'lwc';

export default class TestComponentParent extends LightningElement {


    myBool = false;

    handleIt() {
        this.myBool = !this.myBool;
    }
}