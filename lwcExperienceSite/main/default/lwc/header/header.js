import { LightningElement } from 'lwc';
import isGuest from '@salesforce/user/isGuest';

export default class Header extends LightningElement {

    isNotGuest = !isGuest;

    
}