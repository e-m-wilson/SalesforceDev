import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountHelper.getAllAccounts';
import { refreshApex } from '@salesforce/apex';
import OBJECT_API_NAME from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class TestParent extends LightningElement {

    @wire(getAllAccounts)
    accs;

    objectApiName = OBJECT_API_NAME;
    accName = ACCOUNT_NAME;
    accAnnualRevenue = ACCOUNT_ANNUAL_REVENUE;

    refreshCache() {
        refreshApex(this.accs);
    }
}