import { LightningElement, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import OBJECT_API_NAME from '@salesforce/schema/Case';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import ACCOUNT_LOOKUP_FIELD from '@salesforce/schema/Case.AccountId';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import getHighPriorityCases from '@salesforce/apex/CaseHelper.getHighPriorityCases';

export default class CaseExerciseDemo extends LightningElement {

    objectApiName = OBJECT_API_NAME;
    priority = PRIORITY_FIELD;
    origin = ORIGIN_FIELD;
    accountLookupField = ACCOUNT_LOOKUP_FIELD;
    subject = SUBJECT_FIELD;
    description = DESCRIPTION_FIELD;
    status = STATUS_FIELD;

    @wire(getHighPriorityCases)
    caseList;

    handleRecordSave() {
        refreshApex(this.caseList);
    }
}