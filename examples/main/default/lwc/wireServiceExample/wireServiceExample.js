import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountHelper.getAllAccounts';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class WireServiceExample extends LightningElement {

    allAccountsFromWiredFunction;
    error;
    myQuery;
    allAccounts;

    // Wire service with property syntax. 
    // @wire(getAccountList, {query : '$myQuery'})
    // allAccounts;

    // Wire service with function syntax. 
    @wire(getAllAccounts)
    myAccounts({ error, data}) {
        if(data) {
            this.allAccountsFromWiredFunction = data;
        } else if(error) {
            this.error = error;
        }
    }

    columns = [
        { label: 'Name', fieldName: 'Name', type:'name' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
    ];

    handleQuery(){
        let q = this.template.querySelector('.input').value;
        this.myQuery = q;

        getAccountList({query: q})
        .then(result => {
            this.allAccounts = result;
        })
    }
}