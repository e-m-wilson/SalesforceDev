import { LightningElement, api } from 'lwc';
import OBJECT_API_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LdsExample extends LightningElement {

    @api
    objectApiName = OBJECT_API_NAME;

    @api
    nameField = NAME_FIELD;

    @api
    recordId;

    fields = [NAME_FIELD];

    manualRecordId;

    handleRecordId(e) {
        this.manualRecordId = e.detail.value;
    }

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}