import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
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
          (message) => this.handleMessage(message),
          { scope: APPLICATION_SCOPE }
        );
      }

      unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
      }

      connectedCallback() {
        this.subscribeToMessageChannel();
      }

      disconnectedCallback() {
        this.unsubscribeToMessageChannel();
      }

      handleMessage(message) {
        getAccountList({query : message.myMessage})
        .then((r) => {
            this.accountInfo = r;
        });
        
      }
}