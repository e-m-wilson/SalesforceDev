import { LightningElement, api } from 'lwc';
import OBJECT_API_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class LdsExample extends LightningElement {

    @api
    objectApiName = OBJECT_API_NAME;

    @api
    nameField = NAME_FIELD;

    @api
    recordId;

    manualRecordId;

    handleRecordId(e) {
        this.manualRecordId = e.detail.value;
    }
}