import { LightningElement } from 'lwc';
import getAccs from '@salesforce/apex/AccountHelper.getAccountList';

export default class ImperativeApexDemo extends LightningElement {

   
    accList;

    handleSearch() {
        let q = this.template.querySelector('.input').value;
        getAccs({ query: q})
        .then((res) => {
            console.log(res);
            this.accList = res;
        })
        .catch((e) => {
            console.log(e);
        });
    }

    handleIt(e) {
        console.log(e.target.dataset.id);

        e.target.textContent += ' And the recordId is: ' + e.target.dataset.id;
    }

    
}