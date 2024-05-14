import { LightningElement, track, wire } from 'lwc';
import getAccs from '@salesforce/apex/lwcDemo.getAccounts';

export default class Demo extends LightningElement {

    userName = 'Ethan';
    accounts;
    error;
    @track
    users = [{userName : 'Ethan', age : 34}, {userName : 'Andrew', age : 300}, {userName : 'Jan', age : 23}];
    
    // @wire(getAccs)
    // retrieveAccounts({data, error}){
    //     if(data) {
    //         this.accounts = data;
    //     } else {
    //         this.error = error;
    //     }
    // }

    myBool = false;

    handleClick() {
        this.myBool = !this.myBool;
    }

    addUser() {
        let newUserName = this.template.querySelector('.username').value;
        let newAge = this.template.querySelector('.age').value;
        console.log(newUserName);
        this.users.push({userName : newUserName, age : newAge})
    }

    getAllAccounts() {
        getAccs()
        .then(result => {
            this.accounts = result;
        })
        .catch(error => {
            this.error = error;
        })
    }
}