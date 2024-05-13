import { LightningElement } from 'lwc';

export default class ComponentCommunicationParent extends LightningElement {

    myInput;
    messageFromChild;

    handleChange(e) {
        this.myInput = e.target.value;
    }

    handleChildEvent(e) {
        this.messageFromChild = e.detail;
    }
}