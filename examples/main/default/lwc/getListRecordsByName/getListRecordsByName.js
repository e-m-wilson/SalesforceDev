import { LightningElement, wire } from 'lwc';
import { getListRecordsByName } from "lightning/uiListsApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class GetListRecordsByName extends LightningElement {

    error;
    query;
    accounts;
    

    // WARNING!!!
    // USE PROPERTY SYNTAX TO AVOID ISSUES
    // only objectApiName and listViewName are required
    @wire(getListRecordsByName, {
        objectApiName: ACCOUNT_OBJECT.objectApiName,
        listViewApiName: "AllAccounts",
        fields: ["Account.Name", "Account.AnnualRevenue"],
        searchTerm: "$query",
        sortBy: ['-Account.AnnualRevenue'],
        // where uses GraphQL syntax:
        where: {and: [{ Rating: {eq: 'Hot'} }, { AnnualRevenue: {gt: 0}}, { AnnualRevenue: {ne: null} }]}
    })accounts({data, error}) {
        if(data) {
            this.accounts = data.records;
        } else if(error) {
            this.error = error;
        }
    };

    search() {
        this.query = this.refs.input.value;
    }
} 