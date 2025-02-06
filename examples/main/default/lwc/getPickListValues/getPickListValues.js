import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';

export default class GetPickListValues extends LightningElement {

    defaultRecordTypeId;
    error;
    @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
    results({ error, data }) {
        if (data) {
        this.defaultRecordTypeId = data.defaultRecordTypeId;
        this.error = undefined;
        } else if (error) {
        this.error = error;
        this.defaultRecordTypeId = undefined;
        }
    }

    originOptions;
    @wire(getPicklistValues, { recordTypeId: "$defaultRecordTypeId", fieldApiName: ORIGIN_FIELD })
    picklistResults({ error, data }) {
        if (data) {
        this.originOptions = data.values;
        this.error = undefined;
        } else if (error) {
        this.error = error;
        this.originOptions = undefined;
        }
    }

    async createCase(){
        const fields = {};
        fields[SUBJECT_FIELD.fieldApiName] = this.refs.subject.value;
        fields[ORIGIN_FIELD.fieldApiName] = this.refs.origin.value;
        
        try {
            const caseRecord = await createRecord({apiName: CASE_OBJECT.objectApiName, fields });
            const evt = new ShowToastEvent({
                title: 'Record Created',
                message: 'Case Number: ' + caseRecord.fields.CaseNumber.value + ' was successfully created.',
                variant: 'success'
            });
            this.dispatchEvent(evt);
        } catch(e) {
            this.error = e;
        }
        
        
    }
}