import { LightningElement } from 'lwc';
import greetingCustomLabel from '@salesforce/label/c.Greeting';

export default class CustomLabelExample extends LightningElement {

    greeting = greetingCustomLabel;
}