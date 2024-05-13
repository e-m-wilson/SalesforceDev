import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import MY_LMS_CHANNEL from '@salesforce/messageChannel/myLmsChannel__c';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class LmsExampleComponentTwo extends LightningElement {

    subscription = null;
    accountInfo;

    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        this.subscription = subscribe(
          this.messageContext,
          MY_LMS_CHANNEL,
          (message) => this.handleMessage(message)
        );
      }
      handleMessage(message) {
        getAccountList({query : message.myMessage})
        .then((r) => {
            this.accountInfo = r;
        });
        
      }
      connectedCallback() {
        this.subscribeToMessageChannel();
      }
}