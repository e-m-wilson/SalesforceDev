import { LightningElement } from 'lwc';
import getAccs from '@salesforce/apex/AccountHelper.getAccountList';
import getUserName from '@salesforce/apex/UserHelper.getName';

export default class ImperativeApexDemo extends LightningElement {

   
    accList;
    userName;

    handleSearch() {
        let q = this.template.querySelector('.input').value;
        getAccs({ query: q})
        .then((res) => {
            this.accList = res;
        })
        .catch((e) => {
            console.log(e);
        });
    }

    handleClick() {
        getUserName()
        .then((res) => {
            this.userName = res;
        })
        .catch((e) => {
            console.log(e);
        });
    }
}