import { LightningElement, api } from 'lwc';

export default class ComponentCommunicationChild extends LightningElement {
    
    @api
    message;

    handleClick() {
        this.dispatchEvent(new CustomEvent('mycustomevent', {detail: 'This is a message from the child component!'}));
    }
}