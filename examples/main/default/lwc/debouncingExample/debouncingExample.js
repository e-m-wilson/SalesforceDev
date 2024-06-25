import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class DebouncingExample extends LightningElement {

    myQuery;

    @wire(getAccountList, {query : '$myQuery'})
    allAccounts;

    columns = [
        { label: 'Name', fieldName: 'Name', type:'name' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
    ];

    handleQuery(e){
        let q = e.target.value;

        // timeout will wait 2 seconds before setting the value of myQuery 
        // this resets the timer each keystroke

        setTimeout( () => {
           this.myQuery = q; 
        }, 2000);

        /*
            This will not work. e.target.value needs placed inside a function scope 
            variable - then you can use the variable

           setTimeout( () => {
           this.myQuery = e.target.value; 
        }, 2000);
        */
        
    }
}