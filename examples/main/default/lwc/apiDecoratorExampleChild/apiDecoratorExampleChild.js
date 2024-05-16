import { LightningElement, api } from 'lwc';

export default class ApiDecoratorExampleChild extends LightningElement {
    @api message = 'Hello.';

    @api
    childMethod() {
        console.log('This method was called from a parent component!');
    }
}