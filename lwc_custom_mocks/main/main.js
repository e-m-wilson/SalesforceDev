import { LightningElement, api } from 'lwc';
import getAccs from '@salesforce/apex/AccountHelper.getAccountList';

export default class Main extends LightningElement {

    @api
    accList;

    @api handleSearch() { }

}