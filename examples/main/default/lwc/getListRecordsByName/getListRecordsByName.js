import { LightningElement, wire } from 'lwc';
import { getListRecordsByName } from "lightning/uiListsApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetListRecordsByName extends LightningElement {

    error;
    query;

    // WARNING!!!
    // PROPERTY SYNTAX NEEDS SOME SPECIFIC SETUP
    // -- Need to have a getter as below: get accList() 
    // -- Need to use lwc:if on accounts.data first before trying to loop through accList
    // only objectApiName and listViewName are required
    @wire(getListRecordsByName, {
        objectApiName: ACCOUNT_OBJECT.objectApiName,
        // api name of a list view, you cant get it from the URL when looking at a list view
        listViewApiName: "AllAccounts",
        // these need to very specifically be ObjectApiName.FieldName
        fields: ["Account.Name", "Account.AnnualRevenue"],
        // the search term supports wildcards and is the best option over filtering by name with the where graphQL attribute
        searchTerm: "$query",
        // "-" is specifying a descending order. leave it off for ascending
        sortBy: ['-Account.AnnualRevenue'],
        // where uses GraphQL syntax:
        // valid field operators: https://developer.salesforce.com/docs/platform/graphql/guide/filter-fields.html#field-functions
        where: "{and: [{ Rating: {eq: 'Hot'} }, { AnnualRevenue: {gt: 0}}, { AnnualRevenue: {ne: null} }]}"
    })accounts;

    get accList() {
        return this.accounts.data.records;
    }
    search() {
        this.query = this.refs.input.value;
    }

} 