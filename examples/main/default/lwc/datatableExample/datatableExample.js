import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountHelper.getAllAccounts';

export default class DatatableExample extends LightningElement {

    @wire(getAllAccounts)
    accs;

    columns = [
        { label: 'Account Name', fieldName: 'Name' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
    ];
}