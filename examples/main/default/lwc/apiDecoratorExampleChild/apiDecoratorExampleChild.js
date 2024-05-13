import { LightningElement, api } from 'lwc';

export default class ApiDecoratorExampleChild extends LightningElement {
    @api message = 'Hello.';

    childMethod() {
        return 'This is a message from the child component!';
    }
}