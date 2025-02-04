import { LightningElement, wire } from 'lwc';
import { getListRecordsByName } from "lightning/uiListsApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class GetListRecordsByName extends LightningElement {

  
    query;
    data;

    // WARNING!!!
    // non-functional -- salesforce bug
    @wire(getListRecordsByName, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName: 'AllAccounts',
        fields: [ACCOUNT_NAME, ACCOUNT_ANNUAL_REVENUE],
        //searchTerm: '$query'
        //sortBy: ['-Account.AnnualRevenue'],
        //where: {and: [{Name: { eq: '$query'}}, {AnnualRevenue: { gt: 0 }}]}
    })accounts;


    search() {
        //this.query = this.refs.input.value;
        console.log(this.accounts);
    }
}