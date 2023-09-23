import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import MY_LMS_CHANNEL from '@salesforce/messageChannel/myLmsChannel__c';

export default class LmsExampleComponentOne extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleClick() {
        const payload = {
            myMessage : this.refs.input.value
        };

        publish(this.messageContext, MY_LMS_CHANNEL, payload);
    }
}