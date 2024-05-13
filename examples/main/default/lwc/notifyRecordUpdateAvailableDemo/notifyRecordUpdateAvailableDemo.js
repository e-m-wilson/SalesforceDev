import { LightningElement, api } from 'lwc';
import { notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
import setAccountRatingToHot from '@salesforce/apex/AccountHelper.setAccountRatingToHot';

export default class NotifyRecordUpdateAvailableDemo extends LightningElement {

    @api
    recordId;


    async handleRatingChange() {
        await setAccountRatingToHot({ AccId: this.recordId });
        await notifyRecordUpdateAvailable([{recordId: this.recordId}]);
    }
}