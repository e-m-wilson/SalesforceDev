import { api, LightningElement } from 'lwc';
import deleteAccount from '@salesforce/apex/AccountHelper.deleteAccount';
import OBJECT_API_NAME from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class TestChild extends LightningElement {

    @api
    record;
    objectApiName = OBJECT_API_NAME;
    accName = ACCOUNT_NAME;
    accAnnualRevenue = ACCOUNT_ANNUAL_REVENUE;
    fields = [ACCOUNT_NAME, ACCOUNT_ANNUAL_REVENUE]

    deleteAccount(e) {
        deleteAccount({id: e.target.dataset.recordid})
        .then(() => {
            this.dispatchEvent(new CustomEvent('delete'));    
        })
        
    }


}